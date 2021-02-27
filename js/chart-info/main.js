"use strict";
(function () {
  const BASE_SCORE_PER_TYPE = {
    tap: 500,
    hold: 1000,
    touch: 500,
    slide: 1500,
    break: 2500,
  };
  const STD_NOTE_TYPES = ["tap", "hold", "slide", "break"];
  const DX_NOTE_TYPES = ["tap", "hold", "slide", "touch", "break"];

  const inputElem = document.querySelector(".input");
  const convertBtn = document.getElementById("convert");

  const WIKI_URL_PREFIX = "https://maimai.fandom.com/zh/wiki/";
  const WIKI_URL_SUFFIX = "?variant=zh-hant";

  const JUDGEMENTS_LEN = 5;
  const ZERO_JUDGEMENT = [0, 0, 0, 0, 0];

  function calculatePctPerNote(countPerType) {
    let totalBaseScore = 0;
    for (const nt of Object.keys(countPerType)) {
      totalBaseScore += countPerType[nt] * BASE_SCORE_PER_TYPE[nt];
    }

    const pctPerNoteType = new Map();
    const pctPerTap = (100 * 500) / totalBaseScore;
    const bonusPctPerBreak = 1 / countPerType.break;
    pctPerNoteType.set("tap", pctPerTap);
    pctPerNoteType.set("hold", pctPerTap * 2);
    pctPerNoteType.set("slide", pctPerTap * 3);
    pctPerNoteType.set("touch", pctPerTap);
    pctPerNoteType.set("breakDx", pctPerTap * 5 + bonusPctPerBreak);
    pctPerNoteType.set("break", pctPerTap * 5.2);

    let finaleMaxAchv = (100 * 100 * countPerType.break) / totalBaseScore;
    finaleMaxAchv = Math.floor(finaleMaxAchv * 100) / 100;
    finaleMaxAchv += 100;

    return [pctPerNoteType, finaleMaxAchv];
  }

  function trimSpaces(textLine) {
    return textLine.trim().replace(/\s+/g, "-");
  }

  function parseNumArrayFromText(line, fallback) {
    const textArr = line.match(/\d+/g);
    return textArr ? textArr.map((num) => parseInt(num, 10)) : fallback;
  }

  function performConversion(songTitle, achievement, judgements) {
    if (!isNaN(achievement) && judgements.length >= 4) {
      // update song title UI
      const songTitleElem = document.getElementById("songTitle");
      songTitleElem.innerText = songTitle || "";
      songTitleElem.href = WIKI_URL_PREFIX + encodeURIComponent(songTitle) + WIKI_URL_SUFFIX;

      const noteTypes = judgements.length === 4 ? STD_NOTE_TYPES : DX_NOTE_TYPES;
      const judgementsPerType = new Map();
      judgements.forEach((j, idx) => {
        judgementsPerType.set(noteTypes[idx], j);
      });

      // Update chart info UI
      const countPerType = {};
      const totalNoteCount = DX_NOTE_TYPES.reduce((total, noteType) => {
        const playerJ = judgementsPerType.get(noteType) || [];
        const noteCount = playerJ.reduce((acc, c) => acc + c, 0);
        countPerType[noteType] = noteCount;
        if (noteType === "touch") {
          document
            .querySelector(".touchRow")
            .classList[noteCount === 0 ? "add" : "remove"]("hidden");
        }
        document.getElementById(`${noteType}Count`).innerText = noteCount;
        return total + noteCount;
      }, 0);
      document.getElementById("totalNoteCount").innerText = totalNoteCount;

      // Do some crazy math
      const [pctPerNoteType, finaleMaxAchv] = calculatePctPerNote(countPerType);

      // Update chart info - percentage per note type
      pctPerNoteType.forEach((pct, nt) => {
        nt = nt.charAt(0).toUpperCase() + nt.substring(1);
        let elem;
        switch (nt) {
          case "Break":
            elem = document.getElementById("finalePctPerBreak");
            elem.innerText += pct.toFixed(2);
            break;
          case "BreakDx":
            elem = document.getElementById("dxPctPerBreak");
            elem.innerText = pct.toFixed(4);
            break;
          default:
            elem = document.getElementById("pctPer" + nt);
            elem.innerText = pct.toFixed(2);
            break;
        }
        elem.innerText += "%";
      });
      document.getElementById("finaleMaxAchv").innerText = finaleMaxAchv.toFixed(2) + "%";
    }
  }

  function parseJudgement(text) {
    let lines = text.split("_");
    if (lines.length < 5) {
      lines = text.split("\n");
    }
    const breakJ = parseNumArrayFromText(lines.pop(), undefined);
    // zeroJ is a placeholder for non-existent note types
    const zeroJ = ZERO_JUDGEMENT.slice(0, breakJ.length);

    const touchJ = parseNumArrayFromText(lines.pop(), undefined);
    const slideJ = parseNumArrayFromText(lines.pop(), zeroJ);
    const holdJ = parseNumArrayFromText(lines.pop(), zeroJ);
    const tapJ = parseNumArrayFromText(lines.pop(), zeroJ);
    const judgements = [tapJ, holdJ, slideJ, breakJ];
    if (touchJ) {
      judgements.splice(3, 0, touchJ);
    }
    return judgements;
  }

  convertBtn.addEventListener("click", (evt) => {
    const lines = inputElem.value.split("\n");
    if (lines < 6) {
      return;
    }
    let songTitle;
    let achievementText;
    let noteDetails = [];
    // Parse from the last line
    while (lines.length) {
      const currentLine = lines.pop();
      const judgements = currentLine.match(/\d+/g);
      if (
        noteDetails.length === 0 &&
        judgements &&
        judgements.length >= JUDGEMENTS_LEN - 1 &&
        judgements.length <= JUDGEMENTS_LEN
      ) {
        noteDetails.unshift(currentLine);
        for (let i = 0; i < DX_NOTE_TYPES.length - 1; i++) {
          noteDetails.unshift(lines.pop());
        }
      }
      const achievementMatch = currentLine.match(/(\d+\.\d+)%/);
      if (achievementMatch) {
        achievementText = achievementMatch[1];
        songTitle = lines.pop();
        break;
      }
    }
    if (songTitle && achievementText && noteDetails.length) {
      // const baseUrl = document.location.origin + document.location.pathname + 'classic-layout/';
      const baseUrl = document.location.origin + document.location.pathname;
      const query = new URLSearchParams();
      query.set("st", songTitle);
      query.set("ac", achievementText);
      query.set("nd", noteDetails.map(trimSpaces).join("_"));
      const newUrl = baseUrl + "?" + query;
      console.log(newUrl);
      window.location.assign(newUrl);
    }
  });

  // Handle parameters from URL
  const searchParams = new URLSearchParams(document.location.search);
  let shouldShowInput = true;
  if (searchParams.get("st") && searchParams.get("ac") && searchParams.get("nd")) {
    const songTitle = searchParams.get("st");
    const achievementText = searchParams.get("ac");
    const noteDetail = searchParams.get("nd");
    if (songTitle && achievementText && noteDetail) {
      document.title = `${songTitle} - ${document.title}`;
      const achievement = parseFloat(achievementText);
      const judgements = parseJudgement(noteDetail);
      performConversion(songTitle, achievement, judgements);
      shouldShowInput = false;
    }
  }
  document.querySelector(".resetLink").classList[shouldShowInput ? "add" : "remove"]("hidden");
  document.getElementById("inputContainer").classList[shouldShowInput ? "remove" : "add"]("hidden");
})();
