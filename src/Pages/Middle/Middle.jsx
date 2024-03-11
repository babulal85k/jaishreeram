import React from 'react'
import YouTubeViewer from '../../Components/YouTubeViewer'
import "./Middle.css";

const Middle = () => {
  return (
    <div className='videoTab'>
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=v64T8Mk5_Tc" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=gH_RYRwVrVM" />
      <YouTubeViewer videoUrl="https://youtu.be/OeHV3HQIzq8?t=5" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=bukN2P7WpwE" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=6CBD3NlxaQA&list=RD6CBD3NlxaQA&start_radio=1&rv=bukN2P7WpwE" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=cY4nGCw-JxY&list=RD6CBD3NlxaQA&index=2" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=DCkRJ8BDRQU&list=RD6CBD3NlxaQA&index=3" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=LTzVnBPBGgA&list=RD6CBD3NlxaQA&index=4" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=Sv6jetJDmdM&list=RD6CBD3NlxaQA&index=5" />
    </div>
  )
}

export default Middle;