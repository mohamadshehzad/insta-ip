// VideoDetails.jsx
import React from 'react';

export default function VideoDetails({ video }) {
  return (
    <div className="mt-6 p-4 bg-white shadow-md rounded-lg max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-2">{video.title}</h3>
      <p className="text-sm text-gray-600">Platform: {video.platform}</p>
      {video.thumbnail && (
        <img src={video.thumbnail} alt="Video Thumbnail" className="my-4 rounded-md w-full" />
      )}
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Download Video
      </a>
    </div>
  );
}