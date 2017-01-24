# pick-random-cli [![Build Status](https://travis-ci.org/sindresorhus/pick-random-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/pick-random-cli)

> Pick random items from a list

Useful for making decisions, picking a winner, or anything else randomness can help you with.


## Install

```
$ npm install --global pick-random-cli
```


## Usage

```
$ pick-random --help

  Usage
    $ pick-random <item> … [--count=<number>]
    $ cat newline-separated-picks.txt | pick-random

  Examples
    $ pick-random unicorn rainbow cake pony --count=2
    pony
    rainbow

    $ pick-random yes no
    $ pick-random $(seq 54) --count=6
```


## Related

- [pick-random](https://github.com/sindresorhus/pick-random) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
