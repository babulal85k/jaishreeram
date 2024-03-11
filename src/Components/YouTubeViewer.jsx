import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeViewer = ({ videoUrl }) => {
  const [videoId, setVideoId] = useState('');

  const apiKey = 'AIzaSyCNDBdzY-Yg51mhAqJsebmnlj10R4Q8LNw';

  useEffect(() => {
    const getVideoId = async () => {
      try {
        const videoIdFromUrl = extractVideoId(videoUrl);
        if (!videoIdFromUrl) {
          throw new Error('Invalid YouTube video URL');
        }
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIdFromUrl}&key=${apiKey}`);
        setVideoId(videoIdFromUrl);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    if (videoUrl) {
      getVideoId();
    }
  }, [videoUrl]);

  const extractVideoId = (url) => {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match && match[1];
  };

  

  return (
    <div>
      {videoId && (
        <iframe
          width="1024"
          height="560"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeViewer;
