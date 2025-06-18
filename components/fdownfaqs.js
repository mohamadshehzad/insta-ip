'use client'
import React, { useState, useEffect } from 'react';
import Heading from './Heading';

const faqData = [
  {
    id: 1,
    question: "Is downloading videos legal with your tool?",
    answer: "Our tool enables legal downloads under 'fair use' for personal, non-commercial viewing. We comply with DMCA regulations and automatically block downloads of copyrighted content when rights holders request restrictions. Always respect creators' rights and platform terms of service.",
  },
  {
    id: 2,
    question: "What video qualities and resolutions do you support?",
    answer: "Download videos in up to 4K resolution from YouTube, 1080p HD from TikTok, and high-quality formats from Facebook/Instagram - all without watermarks. We support MP4, WEBM, and 3GP formats with bitrate options up to 50Mbps.",
  },
  {
    id: 3,
    question: "How do you protect my privacy when downloading?",
    answer: "We implement end-to-end encryption for all downloads, automatically purge download records within 1 hour, and never store your IP address or location data. Unlike competitors, we require no sign-ups and never request social media account access.",
  },
  {
    id: 4,
    question: "What security measures protect me from malware?",
    answer: "Every download undergoes triple-scanning: 1) Real-time virus detection in sandboxed environments, 2) Checksum verification against known safe files, 3) Content source validation. We're certified malware-free by independent security labs.",
  },
  {
    id: 5,
    question: "Can I use this on mobile without installing an app?",
    answer: "Yes! Our progressive web app works seamlessly on all iOS and Android devices. Mobile downloads are 40% faster than desktop with optimized compression. Simply visit our site in your mobile browser - no installation needed.",
  },
  {
    id: 6,
    question: "How do I download from private Instagram accounts?",
    answer: "For private content: 1) Ensure you follow the account, 2) Log into your Instagram in our secure session (we never store credentials), 3) Paste the private video link. Downloads are only available for content you have permission to view.",
  },
  {
    id: 7,
    question: "Why can't I download some age-restricted content?",
    answer: "To comply with COPPA regulations and platform policies, we restrict downloads of age-gated content. This protects minors and respects creator settings. For educational content, contact us about our Educator Access program.",
  },
  {
    id: 8,
    question: "Can I convert videos to audio-only formats?",
    answer: "Yes! Extract high-fidelity audio (up to 320kbps) in MP3, M4A or WAV formats. Our audio converter preserves metadata and supports batch processing. Perfect for podcasts, music, and offline listening.",
  },
  {
    id: 9,
    question: "Do you support batch downloading playlists?",
    answer: "Premium users can download entire playlists/channels with one click. Features include: 1) Selective quality choices per video, 2) Automatic metadata organization, 3) ZIP packaging for large collections. Supports YouTube playlists and TikTok channels.",
  },
  {
    id: 10,
    question: "How do you keep the service free without ads?",
    answer: "We're funded through optional premium features - never by selling user data. Our free tier offers full functionality with speed-optimized downloads, while premium adds batch processing and cloud storage integration. No paywalls for core features.",
  },
];

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(1); // Open the first FAQ by default

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex md:gap-10 flex-wrap md:flex-nowrap">
          <Heading 
            heading="Video Downloader FAQs" 
            text="Get answers about secure downloading, privacy protections, and how to maximize our tool" 
          />
        </div>
        <div className="container mx-auto mt-10 ">
          <ul className="basis-1/2">
            {faqData.map((faq, index) => (
              <li
                key={faq.id}
                className={`border border-black border-b-4 rounded-3xl mb-4 shadow-md px-10 py-3 ${expandedFAQ === faq.id ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              >
                <button
                  className="relative flex gap-3 items-center w-full py-5 text-base font-semibold text-left md:text-lg"
                  aria-expanded={expandedFAQ === faq.id ? "true" : "false"}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span className=" hidden md:block font-medium">{`0${index + 1}`}</span>
                  <span className="flex-1 text-base-content">{faq.question}</span>
                  <div className={`rounded-full border ${expandedFAQ === faq.id ? "border-white" : "border-black"} w-8 h-8 flex items-center justify-center`}>
                    <span className="text-xl">{expandedFAQ === faq.id ? "-" : "+"}</span>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${expandedFAQ === faq.id ? "max-h-[1000px] pb-5" : "max-h-0"} overflow-hidden`}
                >
                  <div className="text-base text-white font-light leading-normal border-t border-white pt-8 ">{faq.answer}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;