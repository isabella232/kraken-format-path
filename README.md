kraken-format-path
==================

This is a simple module that takes a locale object (Either simple PayPal `{country: 'US', language: 'en'}` pairs, or objects as the [bcp47] module returns and returns path components as would be used to find language files in the filesystem. It only supports a simplified country and language organization -- if you want to support all languages, use the [bcp47-stringify] module instead, and use those language tags.

[bcp47] https://npmjs.com/package/bcp47
[bcp47-stringify] https://npmjs.com/package/bcp47-stringify

Use
----

```javascript
var locale = { country: 'US', language: 'en' };
var formatPath = require('kraken-format-path');
fs.readFileSync(path.resolve(localeRoot, formatPath(locale), 'language.properties'));
```
