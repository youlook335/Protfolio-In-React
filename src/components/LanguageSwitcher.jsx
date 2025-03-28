import React, { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      const googleTranslateScript = document.createElement("script");
      googleTranslateScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      googleTranslateScript.async = true;
      document.body.appendChild(googleTranslateScript);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "af,sq,am,ar,hy,az,eu,be,bn,bg,ca,ceb,zh,co,hr,cs,da,nl,en,eo,et,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,he,hi,hmn,hu,is,id,ig,is,it,ja,jv,kn,kk,km,rw,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,ny,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sd,si,sk,sl,so,es,su,sw,sv,tl,tg,ta,tt,te,th,tr,tk,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu",
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white border rounded-lg shadow-lg p-2">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageSwitcher;
