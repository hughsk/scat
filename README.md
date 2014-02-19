# scat [![Flattr this!](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=hughskennedy&url=http://github.com/hughsk/scat&title=scat&description=hughsk/scat%20on%20GitHub&language=en_GB&tags=flattr,github,javascript&category=software)[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Pipe your javascripts straight into your browser.

Inspired by [bcat](https://github.com/kessler/node-bcat), except instead of
piping HTML or text into scat you just pipe JavaScript – which will get wrapped
up with an `index.html` and boot up the page for you.

## Usage ##

[![scat](https://nodei.co/npm/scat.png?mini=true)](https://nodei.co/npm/scat)

Either point scat to a JavaScript file:

``` bash
scat bundle.js
```

Or pipe your JavaScript into it:

``` bash
browserify -d index.js | uglifyjs -cm | scat
```

In the interest of keeping things as simple as possible, there's no
command-line flags to use here for now. Enjoy!

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/scat/blob/master/LICENSE.md) for details.
