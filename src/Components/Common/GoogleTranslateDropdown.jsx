import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return; // 🔒 Prevent duplicate

    // Create script tag for Google Translate
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Define the init function only once
    window.googleTranslateElementInit = () => {
      if (!document.getElementById("google_translate_element")) return;

      if (!window.initDone) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,tl,th,fr,zh-CN,ru,id,ar,es,ja",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );

        window.initDone = true; // ✅ prevent future duplicates
      }
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
