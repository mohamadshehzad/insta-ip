// VideoForm.jsx
import React from 'react';

export default function VideoForm({ setVideoData, setLoading, setError }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.videoUrl.value.trim();

    if (!url) {
      setError('Please enter a valid URL.');
      return;
    }

    // Set loading state
    setLoading(true);
    setError('');

    // Simulate API call or fetch logic here
    setTimeout(() => {
      // Fake video data
      const fakeVideoData = {
        title: 'Example Video Title',
        platform: getPlatformFromURL(url),
        url: url,
        thumbnail: 'https://via.placeholder.com/640x360?text=Video+Thumbnail',
      };

      setVideoData(fakeVideoData);
      setLoading(false);
    }, 1000); // Simulating network delay
  };

  const getPlatformFromURL = (url) => {
    if (url.includes('facebook')) return 'Facebook';
    if (url.includes('instagram')) return 'Instagram';
    if (url.includes('tiktok')) return 'TikTok';
    if (url.includes('youtube') || url.includes('youtu.be')) return 'YouTube';
    return 'Unknown Platform';
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full mb-8">
      <div className="w-full max-w-xl flex flex-col sm:flex-row gap-2">
        <input
          type="url"
          name="videoUrl"
          placeholder="Paste video URL here (Facebook, Instagram, TikTok, YouTube)"
          required
          className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Download
        </button>
      </div>
    </form>
  );
}