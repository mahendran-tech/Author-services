// src/LanguageSelector.jsx
import { useEffect, useRef, useState } from "react";

const LanguageSelector = () => {
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "th", name: "ไทย" },
    { code: "ar", name: "العربية" },
    { code: "zh-CN", name: "简体中文" },
    { code: "ru", name: "Русский" },
    { code: "es", name: "Español" },
  ];

  const translateElementRef = useRef(null);
  const [isTranslateReady, setIsTranslateReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.style.width = "180px";
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Load Google Translate script dynamically
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate with hidden element
    window.googleTranslateElementInit = () => {
      if (translateElementRef.current) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,th,ar,zh-CN,ru,es",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false, // Disable auto-display of Google UI
          },
          translateElementRef.current
        );
        setIsTranslateReady(true); // Mark as ready once initialized
      }
    };

    // Set initial language from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const initialLang = urlParams.get("lang") || "en";
    if (
      window.google &&
      window.google.translate &&
      window.google.translate.TranslateElement
    ) {
      window.google.translate.TranslateElement.getInstance().setLanguagePair(
        "en",
        initialLang
      );
    }

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const changeLanguage = (langCode) => {
    if (!isTranslateReady) {
      console.log("Translation not ready yet.");
      return;
    }

    // Update URL and reload to apply language
    window.location.search = `?lang=${langCode}`;
  };

  return (
    <div className="language-selector-container">
      <div ref={translateElementRef} style={{ display: "none" }}></div>{" "}
      {/* Hidden element */}
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-selector"
        defaultValue={
          new URLSearchParams(window.location.search).get("lang") || ""
        }
        disabled={!isTranslateReady}
      >
        <option value="" disabled>
          Select Language
        </option>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
