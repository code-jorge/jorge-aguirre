'use strict';
const assert = require('node:assert');
const { describe, it } = require('node:test');

const main = require('../src/main');

describe('Sign test', () => {
  it('Should work for a normal message', () => {
    const bunny = [
      '|------------------|',
      '| NO MORE TESTS!   |',
      '|------------------|',
      '(\\__/) ||',
      '(•ㅅ•) ||',
      '/   づ',
    ].join('\n');
    const sign = main('No more tests!');
    assert.strictEqual(sign, bunny);
  });

  it('Should work for a very long message', () => {
    const bunny = [
      '|------------------|',
      '| NO MORE TESTS    |',
      '| WILL BE RUN IN   |',
      '| THIS PROJECT!    |',
      '|------------------|',
      '(\\__/) ||',
      '(•ㅅ•) ||',
      '/   づ',
    ].join('\n');
    const sign = main('No more tests will be run in this project!');
    assert.strictEqual(sign, bunny);
  });

  it('Should work for a very long message', () => {
    const bunny = [
      '|------------------|',
      '| SUPERCALIFRAGILI |',
      '| STICEXPIALIDOCIO |',
      '| US!              |',
      '|------------------|',
      '(\\__/) ||',
      '(•ㅅ•) ||',
      '/   づ',
    ].join('\n');
    const sign = main('Supercalifragilisticexpialidocious!');
    assert.strictEqual(sign, bunny);
  });

});