'use strict';

const MAX_WORD_LENGTH = 16;

const splitMessage = (message) => {
  const baseWords = message.toUpperCase().split(' ');
  // If a word is longer than the sign width, split it
  const words = [];
  baseWords.forEach((word) => {
    if (word.length <= MAX_WORD_LENGTH) {
      words.push(word);
      return;
    }
    const wordParts = [];
    for (let i = 0; i < word.length; i += MAX_WORD_LENGTH) {
      wordParts.push(word.substr(i, MAX_WORD_LENGTH));
    }
    words.push(...wordParts);
  });
  return words;
}

module.exports = splitMessage;