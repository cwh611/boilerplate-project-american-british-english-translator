const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = chai;
const server = require('../server.js');
const Translator = require('../components/translator.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {

    const translator = new Translator();

    test("Translation with text and locale fields: POST request to /api/translate", function (done) {
        const request = {
            text: "I left my cleats at the bar.",
            locale: "american-to-british"
        };
        chai.request(server)
            .post("/api/translate")
            .send(request)
            .end((err, res) => {
                assert.equal(res.body.text, "I left my cleats at the bar.");
                console.log("res.translation:", res.body.translation);
                console.log("res.text:", res.body.text);
                done();
            })
    })

    test("Translation with text and invalid locale field: POST request to /api/translate", function (done) {
        const request = {
            text: "I left my cleats at the bar.",
            locale: "american-to-swahili"
        };
        chai.request(server)
            .post("/api/translate")
            .send(request)
            .end((err, res) => {
                assert.equal(res.body.error, "Invalid value for locale field");
                done();
            })
    })

    test("Translation with missing text field: POST request to /api/translate", function (done) {
        const request = {locale: "american-to-british"}
        chai.request(server)
        .post("/api/translate")
        .send(request)
        .end((err, res) => {
            assert.equal(res.body.error, "Required field(s) missing");
            done();
        })
    })

    test("Translation with missing locale field: POST request to /api/translate", function (done) {
        const request = {
            text: "I left my cleats at the bar."
        };
        chai.request(server)
        .post("/api/translate")
        .send(request)
        .end((err, res) => {
            assert.equal(res.body.error, "Required field(s) missing");
            done();
        })
    });    

    test("Translation with empty text: POST request to /api/translate", function (done) {
        const request = {
            text: "",
            locale: "american-to-british"
        };
        chai.request(server)
        .post("/api/translate")
        .send(request)
        .end((err, res) => {
            assert.equal(res.body.error, "No text to translate");
            done();
        })
    })

    test("Translation with text that needs no translation: POST request to /api/translate", function (done) {
        const request = {
            text: "poop",
            locale: "american-to-british"
        };
        chai.request(server)
        .post("/api/translate")
        .send(request)
        .end((err, res) => {
            assert.equal(res.body.translation, "Everything looks good to me!");
            done();
        })
    })

});
