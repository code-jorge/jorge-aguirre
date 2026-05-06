## jorge-aguirre

A tiny `npm` module that turns any message into ASCII art of a bunny holding a protest sign.

It exposes both a CLI and a programmatic API. The message is uppercased, wrapped to fit the sign's width (long words are split across lines), and rendered above a small bunny.

### Install

```sh
npm install jorge-aguirre
```

### CLI usage

```sh
npx jorge-aguirre "No more tests!"
```

Output:

```
|------------------|
| NO MORE TESTS!   |
|------------------|
(\__/) ||
(•ㅅ•) ||
/   づ
```

### Programmatic usage

```js
const sign = require('jorge-aguirre');

console.log(sign('No more tests will be run in this project!'));
```

Output:

```
|------------------|
| NO MORE TESTS    |
| WILL BE RUN IN   |
| THIS PROJECT!    |
|------------------|
(\__/) ||
(•ㅅ•) ||
/   づ
```

### Tests

```sh
npm test
```

### License

MIT
