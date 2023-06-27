'use strict';

const MAX_SIGN_WIDTH = 20;
const LINE_DELIMITER = '\n';

const BUNNY = '(\\__/) ||\n(•ㅅ•) ||\n/   づ';

const SIGN_BOUNDARY = `|${'-'.repeat(MAX_SIGN_WIDTH - 2)}|`;

const createSign = (words)=> {
  const lines = [];
  words.forEach((word) => {
    if (lines.length == 0) {
      lines.push(word);
      return;
    }
    // If two words fit in the same line, merge them into a single one
    const lastLine = lines[lines.length - 1];
    if (lastLine.length + 1 + word.length > (MAX_SIGN_WIDTH - 3)) {
      lines.push(word);
      return;
    }
    lines[lines.length - 1] = lastLine + ' ' + word;
  });
  return lines.map((line) => `| ${line}${' '.repeat(MAX_SIGN_WIDTH - 3 - line.length)}|` ).join(LINE_DELIMITER);
}

const buildSign = (words)=> {
  return [
    SIGN_BOUNDARY,
    createSign(words),
    SIGN_BOUNDARY,
    BUNNY
  ].join(LINE_DELIMITER);
}

module.exports = buildSign;