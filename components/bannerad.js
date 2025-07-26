// components/bannerad.js
"use client";

import { useEffect } from "react";

export default function BannerAd() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";

    // Copying the original script logic
    script.innerHTML = `
      (function(tfkty){
        var d = document,
            s = d.createElement('script'),
            l = d.scripts[d.scripts.length - 1];
        s.settings = tfkty || {};
        s.src = "//supportiveheight.com/b_XIVKs/d.Gelw0RYYWXcQ/DebmT9qu/Z/UwljkVP/TeYK1tM-zAMD4cNMzkEntPNMj/UGzsMpzngP3NMTgX";
        s.async = true;
        s.referrerPolicy = 'no-referrer-when-downgrade';
        l.parentNode.insertBefore(s, l);
      })({})
    `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "30px 0" }}>
      <p>Advertisement</p>
      {/* Ad will load dynamically via script */}
    </div>
  );
}
