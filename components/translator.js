'use strict';

const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {

    translate(string, locale) {

        let translatedString = string;
        const spellingArray = Object.entries(americanToBritishSpelling);
        const titlesArray = Object.entries(americanToBritishTitles);
        const americanOnlyArray = Object.entries(americanOnly);
        const britishOnlyArray = Object.entries(britishOnly);

        if (locale === "american-to-british") {
            
            for (let i = 0; i < americanOnlyArray.length; i++) {
                if (translatedString.includes(americanOnlyArray[i][0])) {
                    translatedString = translatedString.replace(americanOnlyArray[i][0], americanOnlyArray[i][1]);
                }
            }

            for (let i = 0; i < spellingArray.length; i++) {
                if (translatedString.includes(spellingArray[i][0])) {
                    translatedString = translatedString.replace(spellingArray[i][0], spellingArray[i][1])
                }
            }

            for (let i = 0; i < titlesArray.length; i++) {
                if (translatedString.includes(titlesArray[i][0])) {
                    translatedString = translatedString.replace(titlesArray[i][0], titlesArray[i][1])
                }
            }

            for (let i = 0; i < britishOnlyArray.length; i++) {
                if (translatedString.includes(britishOnlyArray[i][1])) {
                    translatedString = translatedString.replace(britishOnlyArray[i][1], britishOnlyArray[i][0])
                }
            }

            translatedString = translatedString.replace(/([0-9]+)(:)([0-9][0-9])/, "<span class=\"highlight\">$1.$3</span>"); // Translate time format

        } else if (locale === "british-to-american") {

            for (let i = 0; i < britishOnlyArray.length; i++) {
                if (translatedString.includes(britishOnlyArray[i][0])) {
                    translatedString = translatedString.replace(britishOnlyArray[i][0], britishOnlyArray[i][1])
                }
            }

            for (let i = 0; i < spellingArray.length; i++) {
                if (translatedString.includes(spellingArray[i][1])) {
                    translatedString = translatedString.replace(spellingArray[i][1], spellingArray[i][0])
                }
            }

            for (let i = 0; i < titlesArray.length; i++) {
                if (translatedString.includes(titlesArray[i][1])) {
                    translatedString = translatedString.replace(titlesArray[i][1], titlesArray[i][0])
                }
            }

            for (let i = 0; i < americanOnlyArray.length; i++) {
                if (translatedString.includes(americanOnlyArray[i][1])) {
                    translatedString = translatedString.replace(americanOnlyArray[i][1], americanOnlyArray[i][0])
                }
            }

            translatedString = translatedString.replace(/([0-9]+)(\.)([0-9][0-9])/, "<span class=\"highlight\">$1:$3</span>"); // Translate time format

        }

        return translatedString;
    }
}

module.exports = Translator;