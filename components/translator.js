'use strict';

const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
    
    translate(string, locale) {
        
        let wordArray = string.split(/(\s+|[.,!?;:(){}\[\]]+)/);
        console.log(wordArray);
        let translatedString = "";
        
        if (locale === "american-to-british") {
            
            const translatedWordArray = wordArray.map(word => {
                
                // Check for American-to-British translation using different dictionaries
                if (americanOnly[word.toLowerCase()])  {
                    return `<span class="highlight"> ${americanOnly[word.toLowerCase()]} </span>`;
                }
                
                if (americanToBritishSpelling[word.toLowerCase()]) {
                    return `<span class="highlight"> ${americanToBritishSpelling[word.toLowerCase()]} </span>`;
                } 
                
                if (americanToBritishTitles[(word + ".").toLowerCase()]) {
                    return `<span class="highlight"> ${americanToBritishTitles[(word + ".").toLowerCase()].charAt(0).toUpperCase() + americanToBritishTitles[(word + ".").toLowerCase()].slice(1).toLowerCase()} </span>`;
                } 
                
                return word;
            
            });
            
            translatedString = translatedWordArray.join("").replace(/\.\s/, " ").replace(/([0-9]+)(:)([0-9][0-9])/, "$1.$3");
            console.log("translatedString:", translatedString)

        } else if (locale === "british-to-american") {
           
            const translatedWordArray = wordArray.map(word => {
                
                // Check for British-only words
                if (word === britishOnly[word.toLowerCase()]) {
                    return `<span class="highlight">${britishOnly[word.toLowerCase()]}</span>`;
                }

                // Check for British-to-American translation in spelling
                const translationSpellingArray = Object.entries(americanToBritishSpelling);
                for (let i = 0; i < translationSpellingArray.length; i++) {
                    if (word.toLowerCase() === translationSpellingArray[i][1]) {
                        return `<span class="highlight"> ${translationSpellingArray[i][0]} </span>`;
                    }
                }

                // Check for British-to-American translation in titles
                const translationTitlesArray = Object.entries(americanToBritishTitles);
                for (let i = 0; i < translationTitlesArray.length; i++) {
                    if (word.toLowerCase() === translationTitlesArray[i][1]) {
                        return `<span class="highlight"> ${translationTitlesArray[i][0].charAt(0).toUpperCase() + translationTitlesArray[i][0].slice(1).toLowerCase()} </span>`;
                    }
                }

                return word; // If no match, return the word unchanged
            
            });
    
            translatedString = translatedWordArray.join("").replace(/([0-9]+)(\.)([0-9][0-9])/, "$1:$3"); // Translate time format
        
        }

        return translatedString;
    }
}

module.exports = Translator;
