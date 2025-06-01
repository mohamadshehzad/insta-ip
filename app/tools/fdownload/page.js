// page.js
'use client';

import React, { useState } from 'react';

// Components from local components folder
import VideoForm from './components/VideoForm';         // default export
import VideoDetails from './components/VideoDetails';  // default export

// Global components
import Concern from '@/components/Concern';
import Content from '@/components/Content';
import FAQ from '@/components/FAQ';
import Loader from '@/components/Loader';

export default function FDownloadPage() {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <>
      <div className={`relative ${videoData ? 'mb-32' : 'mb-5'} bg-gray-100`}>
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>

        <div className="px-4 pb-16 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-4xl text-center font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
              Download Videos
              <br className="hidden md:block" />
              Easily and{' '}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-blue-500" />
                <span className="relative text-white">Securely</span>
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-center text-gray-500 sm:mt-5 md:my-5">
              Paste a Facebook, Instagram, TikTok, or YouTube video URL to download it in your preferred format.
            </p>

            <VideoForm setVideoData={setVideoData} setLoading={setLoading} setError={setError} />

            {loading && <Loader />}
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}

            {!loading && videoData && <VideoDetails video={videoData} />}
          </div>
        </div>
      </div>

      <Concern />
      <Content />
      <FAQ />
    </>
  );
}