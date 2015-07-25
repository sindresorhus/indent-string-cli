# indent-string-cli [![Build Status](https://travis-ci.org/sindresorhus/indent-string-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/indent-string-cli)

> Indent each line in a string


## Install

```
$ npm install --global indent-string-cli
```


## Usage

```
$ strip-ansi --help

  Usage
    $ indent-string <string> [--indent=<string>] [--count=<number>]
    $ cat file.txt | indent-string > indented-file.txt

  Example
    $ indent-string "$(printf 'Unicorns\nRainbows\n')" --indent=♥ --count=4
    ♥♥♥♥Unicorns
    ♥♥♥♥Rainbows
```


## Related

- [indent-string](https://github.com/sindresorhus/indent-string) - API for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
