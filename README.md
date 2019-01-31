# Landingpages

Simple script to bind querystring data into body replacers

## How to use

Put inside your <head> tag, as the last item before </head> the following snippet

```
    <script src="https://cdn.guiabolso.com.br/landingpages/index.js"></script>
    <script>
        run();
    </script>
```

Then, when you receive querystring parameters, it'll be parsed as its name and the following
two brackets reference

```
url
?name=aboot+cabro

html
<p>my name is {{name}}</p>

output 
<p>my name is aboot cabro</p>
```

## How to build

Use `npm start` then `npm run build`

## License 

Copyright (c) 2019 Guiabolso

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
