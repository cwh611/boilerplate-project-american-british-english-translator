const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = chai;
const Translator = require('../components/translator.js');

chai.use(chaiHttp);

suite('Unit Tests', () => {

    const translator = new Translator();

    test("Mangoes are my favorite fruit.", function () {
      assert.equal(translator.translate("Mangoes are my favorite fruit.", "american-to-british"), "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
      console.log(translator.translate("Mangoes are my favorite fruit.", "american-to-british"));
    });

    test("I ate yogurt for breakfast.", function () {
      assert.equal(translator.translate("I ate yogurt for breakfast.", "american-to-british"), "I ate <span class=\"highlight\">yoghurt</span> for breakfast.")
      console.log(translator.translate("I ate yogurt for breakfast.", "american-to-british"));
    })

    test("We had a party at my friend's condo.", function () {
      assert.equal(translator.translate("We had a party at my friend's condo.", "american-to-british"), "We had a party at my friend's <span class=\"highlight\">flat</span>.")
      console.log(translator.translate("We had a party at my friend's condo.", "american-to-british"))
    })

    test("Can you toss this in the trashcan for me?", function () {
      assert.equal(translator.translate("Can you toss this in the trashcan for me?", "american-to-british"), "Can you toss this in the <span class=\"highlight\">bin</span> for me?")
      console.log(translator.translate("Can you toss this in the trashcan for me?", "american-to-british"))
    })

    test("The parking lot was full.", function () {
      assert.equal(translator.translate("The parking lot was full.", "american-to-british"), "The parking lot was full.")
      console.log(translator.translate("The parking lot was full.", "american-to-british"))
    })

    test("Like a high tech Rube Goldberg machine.", function () {
        assert.equal(translator.translate("Like a high tech Rube Goldberg machine.", "american-to-british"), "Like a high tech Rube Goldberg machine.")
        console.log(translator.translate("Like a high tech Rube Goldberg machine.", "american-to-british"))
    })

    test("To play hooky means to skip class or work.", function () {
        assert.equal(translator.translate("To play hooky means to skip class or work.", "american-to-british"), "To play hooky means to skip class or work.")
        console.log(translator.translate("To play hooky means to skip class or work.", "american-to-british"));
    })

    test("No Mr. Bond, I expect you to die.", function () {
        assert.equal(translator.translate("No Mr. Bond, I expect you to die.", "american-to-british"), "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.");
        console.log(translator.translate("No Mr. Bond, I expect you to die.", "american-to-british"));
    })

    test("Dr. Grosh will see you now.", function () {
        assert.equal(translator.translate("Dr. Grosh will see you now.", "american-to-british"), "<span class=\"highlight\">Dr</span> Grosh will see you now.")
        console.log(translator.translate("Dr. Grosh will see you now.", "american-to-british"));
    })

    test("Lunch is at 12:15 today.", function () {
        assert.equal(translator.translate("Lunch is at 12:15 today.", "american-to-british"), "Lunch is at <span class='highlight'>12.15</span> today.")
        console.log(translator.translate("Lunch is at 12:15 today.", "american-to-british"));
    })

    test("We watched the footie match for a while.", function () {
        assert.equal(translator.translate("We watched the footie match for a while.", "british-to-american"), "We watched the <span class=\"highlight\">soccer</span> match for a while.")
        console.log(translator.translate("We watched the footie match for a while.", "british-to-american"));
    })

    test("Paracetamol takes up to an hour to work.", function () {
        assert.equal(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american"), "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
        console.log(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american"));
    })

    test("First, caramelise the onions.", function () {
        assert.equal(translator.translate("First, caramelise the onions.", "british-to-american"), "First, <span class=\"highlight\">caramelize</span> the onions.");
        console.log(translator.translate("First, caramelise the onions.", "british-to-american"));
    })

    test("I spent the bank holiday at the funfair.", function () {
        assert.equal(translator.translate("I spent the bank holiday at the funfair.", "british-to-american"), "I spent the bank holiday at the <span class=\"highlight\">carnival</span>.");
        console.log(translator.translate("I spent the bank holiday at the funfair.", "british-to-american"));
    })

    test("I had a bicky then went to the chippy.", function () {
        assert.equal(translator.translate("I had a bicky then went to the chippy.", "british-to-american"), "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.");
        console.log(translator.translate("I had a bicky then went to the chippy.", "british-to-american"));
    })

    test("I've just got bits and bobs in my bum bag.", function () {
        assert.equal(translator.translate("I've just got bits and bobs in my bum bag.", "british-to-american"), "I've just got bits and bobs in my bum bag.");
        console.log(translator.translate("I've just got bits and bobs in my bum bag.", "british-to-american"));
    })

    test("The car boot sale at Boxted Airfield was called off.", function () {
        assert.equal(translator.translate("The car boot sale at Boxted Airfield was called off.", "british-to-american"), "The car boot sale at Boxted Airfield was called off.");
        console.log(translator.translate("The car boot sale at Boxted Airfield was called off.", "british-to-american"));
    })

    test("Have you met Mrs Kalyani?", function () {
        assert.equal(translator.translate("Have you met Mrs Kaylani?", "british-to-american"), "Have you met <span class=\"highlight\">Mrs.</span> Kaylani?");
        console.log(translator.translate("Have you met Mrs Kalyani?", "british-to-american"));
    })

    test("Prof Joyner of King's College, London.", function () {
        assert.equal(translator.translate("Prof Joyner of King's College, London.", "british-to-american"), "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.")
        console.log(translator.translate("Prof Joyner of King's College, London.", "british-to-american"));
    })

    test("Tea time is usually around 4 or 4.30.", function () {
        assert.equal(translator.translate("Tea time is usually around 4 or 4.30.", "british-to-american"), "Tea time is usually around 4 or <span class='highlight'>4:30</span>.");
        console.log(translator.translate("Tea time is usually around 4 or 4.30.", "british-to-american"));
    })

    test("Highlight translation in Mangoes are my favorite fruit.", function () {
        assert.equal(translator.translate("Mangoes are my favorite fruit.", "american-to-british"), "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
        console.log(translator.translate("Mangoes are my favorite fruit.", "american-to-british"));
    })

    test("Highlight translation in I ate yogurt for breakfast.", function () {
        assert.equal(translator.translate("I ate yogurt for breakfast.", "american-to-british"), "I ate <span class=\"highlight\">yoghurt</span> for breakfast.")
        console.log(translator.translate("I ate yogurt for breakfast.", "american-to-british"));
    })

    test("Highlight translation in We watched the footie match for a while.", function () {
        assert.equal(translator.translate("We watched the footie match for a while.", "british-to-american"), "We watched the <span class=\"highlight\">soccer</span> match for a while.")
        console.log(translator.translate("We watched the footie match for a while.", "british-to-american"));
    })

    test("Paracetamol takes up to an hour to work.", function () {
        assert.equal(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american"), "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
        console.log(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american"));
    })

});

