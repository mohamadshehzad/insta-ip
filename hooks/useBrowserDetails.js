'use client'
import { useState, useEffect } from 'react';

const useBrowserDetails = () => {
  const [browser, setBrowser] = useState('');
  const [screenSize, setScreenSize] = useState('');
  const [cookiesEnabled, setCookiesEnabled] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    let browserName = 'Other';
    if (userAgent.indexOf('Chrome') > -1) {
      browserName = 'Google Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
      browserName = 'Apple Safari';
    } else if (userAgent.indexOf('Firefox') > -1) {
      browserName = 'Mozilla Firefox';
    } else if (userAgent.indexOf('MSIE') > -1 || !!document.documentMode === true) {
      browserName = 'Microsoft Internet Explorer';
    }

    setBrowser(browserName);
    setScreenSize(`${window.outerWidth} X ${window.outerHeight}`);
    setCookiesEnabled(navigator.cookieEnabled);
  }, []);

  return { browser, screenSize, cookiesEnabled };
};

export default useBrowserDetails;
