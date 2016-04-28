# rn-twemoji

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-download-image]][npm-download-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-dev-image]][daviddm-dev-url]
[![License][license-image]][license-url]

[twemoji](https://github.com/twitter/twemoji) resources for React Native.


## Installation

```
npm install --save rn-twemoji
```


## Usage

```jsx
// Name base
<Image source={require('@moqada/rn-twemoji/n/sushi')} />;

// Code base
<Image source={require('@moqada/rn-twemoji/c/1f363')} />;
```

## Development

```
git submodule update --init
npm i
```

Generate images and codes from original twemoji resources.

```
npm run build
```

## License

follow [twitter/twemoji](https://github.com/twitter/twemoji).

[npm-url]: https://www.npmjs.com/package/rn-twemoji
[npm-image]: https://img.shields.io/npm/v/rn-twemoji.svg?style=flat-square
[npm-download-url]: https://www.npmjs.com/package/rn-twemoji
[npm-download-image]: https://img.shields.io/npm/dt/rn-twemoji.svg?style=flat-square
[travis-url]: https://travis-ci.org/moqada/rn-twemoji
[travis-image]: https://img.shields.io/travis/moqada/rn-twemoji.svg?style=flat-square
[daviddm-url]: https://david-dm.org/moqada/rn-twemoji
[daviddm-image]: https://img.shields.io/david/moqada/rn-twemoji.svg?style=flat-square
[daviddm-dev-url]: https://david-dm.org/moqada/rn-twemoji#info=devDependencies
[daviddm-dev-image]: https://img.shields.io/david/dev/moqada/rn-twemoji.svg?style=flat-square
[codecov-url]: https://codecov.io/github/moqada/rn-twemoji
[codecov-image]: https://img.shields.io/codecov/c/github/moqada/rn-twemoji.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/rn-twemoji.svg?style=flat-square
