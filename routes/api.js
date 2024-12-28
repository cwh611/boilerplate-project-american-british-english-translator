'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      if (!("locale" in req.body) || !("text" in req.body)) {
        return res.json({ error: "Required field(s) missing" });
      }
      
      const { locale, text } = req.body;

      if (text === "") {
        return res.json({ error: "No text to translate" });
      }

      if (locale !== "american-to-british" && locale !== "british-to-american") {
        return res.json({ error: "Invalid value for locale field" });
      }

      const result = translator.translate(text, locale);

      if (result === text) {
        return res.json({
          text,
          translation: "Everything looks good to me!"
        });
      }

      return res.json({
        text,
        translation: result
      });
    });
};
