launchZoomer
============

A jQuery plugin to simulate the zooming animation for opening a file in Mac OS X Finder

## Demo

![launchZoomer Demo](https://raw.github.com/dannvix/jquery-launchZoomer/add-demo-gif-to-readme/demo.gif)


## Usage

Just select the element you want to apply this effect, and call `launchZoomer()` method. An optional hash of settings can be passed in.

    $('.target-element').launchZoomer();
    $('.target-element').launchZoomer(options);

If you want to disable the zooming effect, pass a destroy option:

    $('.target-element').launchZoomer("destroy");

## Options

Here are all the default and available options:

    options = {
      scale: 3,
      blur: '5px',
      duration: '350ms',
      easingFunction: 'ease-out',
      delay: 0
    }

## License

Copyright (c) 2013 Teng-hao "Zhusee" Chang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
