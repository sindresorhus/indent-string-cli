# indent-string-cli

> Indent each line in a string

## Install

```
$ npm install --global indent-string-cli
```

## Usage

```
$ indent-string --help

  Usage
    $ indent-string <string> [--count=<number>] [--indent=<string>]
    $ cat file.txt | indent-string > indented-file.txt

  Example
    $ indent-string "$(printf 'Unicorns\nRainbows\n')" --count=4 --indent=♥
    ♥♥♥♥Unicorns
    ♥♥♥♥Rainbows
```

## Related

- [indent-string](https://github.com/sindresorhus/indent-string) - API for this module
