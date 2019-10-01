/** https://www.hackerrank.com/challenges/ctci-ransom-note/problem
 * Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is No.

input: two arrays of word strings
output: boolean
 */

function checkMagazine(magazine, note) {
  let magazineFC = buildFrequencyCounter(magazine);
  let noteFC = buildFrequencyCounter(note);

  for (let noteWord in noteFC) {
    if (!magazineFC[noteWord]) {
      return false;
    } else if (magazineFC[noteWord] < noteFC[noteWord]) {
      return false;
    }
  }
  return true;
}

function buildFrequencyCounter(wordArr) {
  let wordCounter = {};

  for (let word of wordArr) {
    if (!wordCounter[word]) {
      wordCounter[word] = 1;
    } else {
      wordCounter[word]++;
    }
  }
  return wordCounter;
}

let magazine = ["me", "one", "grand", "today", "night", "give"];
let note = ["give", "one", "grand", "today"];

checkMagazine(magazine, note)  // true 