"use strict";

var path = require('path');

module.exports = function legacyFormatPath(locale) {
    if (locale && locale.language && locale.country) {
        // PayPal simplified
        return path.join(locale.country, locale.language);
    } else if (locale && locale.langtag) {
        // BCP47
        return path.join(locale.langtag.region, locale.langtag.language.language);
    } else {
        return '';
    }
};
