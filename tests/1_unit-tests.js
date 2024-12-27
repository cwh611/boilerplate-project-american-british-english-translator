import { assert } from 'chai';
import Translator from '../components/translator.js';

suite('Unit Tests', () => {
    
    const translator = new Translator();
    
    test("Mangoes are my favorite fruit.", function () {
        console.log(translator.translate("Mangoes are my favorite fruit.", "american-to-british"));
    });

    test("I ate yogurt for breakfast.", function () {
        console.log(translator.translate("I ate yogurt for breakfast.", "american-to-british"));
    })

    test("We had a party at my friend's condo.", function () {
        console.log(translator.translate("We had a party at my friend's condo.", "american-to-british"))
    })

    test("Can you toss this in the trashcan for me?", function () {
        console.log(translator.translate("Can you toss this in the trashcan for me?", "american-to-british"))
    })

    test("The parking lot was full.", function () {
        console.log(translator.translate("The parking lot was full.", "american-to-british"))
    })

    test("Like a high tech Rube Goldberg machine.", function () {
        console.log(translator.translate("Like a high tech Rube Goldberg machine.", "american-to-british"))
    })

    test("To play hooky means to skip class or work.", function () {
        console.log(translator.translate("To play hooky means to skip class or work.", "american-to-british"));
    })

    test("No Mr. Bond, I expect you to die.", function () {
        console.log(translator.translate("No Mr. Bond, I expect you to die.", "american-to-british"));
    })

    test("Dr. Grosh will see you now.", function () {
        console.log(translator.translate("Dr. Grosh will see you now.", "american-to-british"));
    })

    test("Lunch is at 12:15 today.", function () {
        console.log(translator.translate("Lunch is at 12:15 today.", "american-to-british"));
    })

    test("We watched the footie match for a while.", function () {
        console.log(translator.translate("We watched the footie match for a while.", "british-to-american"));
    })

    test("Paracetamol takes up to an hour to work.", function () {
        console.log(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american"));
    })

    test("First, caramelise the onions.", function () {
        console.log(translator.translate("First, caramelise the onions.", "british-to-american"));
    })

    test("I spent the bank holiday at the funfair.", function () {
        console.log(translator.translate("I spent the bank holiday at the funfair.", "british-to-american"));
    })

    test("I had a bicky then went to the chippy.", function () {
        console.log(translator.translate("I had a bicky then went to the chippy.", "british-to-american"));
    })

    test("I've just got bits and bobs in my bum bag.", function () {
        console.log(translator.translate("I've just got bits and bobs in my bum bag.", "british-to-american"));
    })

    test("The car boot sale at Boxted Airfield was called off.", function () {
        console.log(translator.translate("The car boot sale at Boxted Airfield was called off.", "british-to-american"));
    })

    test("Have you met Mrs Kalyani?", function () {
        console.log(translator.translate("Have you met Mrs Kalyani?", "british-to-american"));
    })

    test("Prof Joyner of King's College, London.", function () {
        console.log(translator.translate("Prof Joyner of King's College, London.", "british-to-american"));
    })

    test("Tea time is usually around 4 or 4.30.", function () {
        console.log(translator.translate("Tea time is usually around 4 or 4.30.", "british-to-american"));
    })

    test("Highlight translation in Mangoes are my favorite fruit.", function () {
        console.log(translator.translate("Mangoes are my favorite fruit.", "american-to-british"));
    })

    test("Highlight translation in I ate yogurt for breakfast.", function () {
        console.log(translator.translate("I ate yogurt for breakfast.", "american-to-british"));
    })

    test("Highlight translation in We watched the footie match for a while.", function () {
        console.log(translator.translate("We watched the footie match for a while.", "british-to-american"));
    })

    test("Paracetamol takes up to an hour to work.", function () {
        console.log(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american"));
    })

    

});

