import React from 'react'
import YouTubeViewer from '../../Components/YouTubeViewer'
import "./Middle.css";

const Middle = () => {
  return (
    <div className='videoTab'>
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=XMKg-8OZRGQ" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=fJysxdEFrZ0" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=fJysxdEFrZ0" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=fJysxdEFrZ0" />
      <YouTubeViewer videoUrl="https://www.youtube.com/watch?v=fJysxdEFrZ0" />
    </div>
  )
}

export default Middle;