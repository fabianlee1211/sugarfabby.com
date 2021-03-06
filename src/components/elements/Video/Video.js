import * as React from 'react';

const Video = ({ videoSrcURL, videoTitle }) => (
  <div
    className="w-full relative overflow-hidden my-10"
    style={{ paddingTop: '56.25%' }}
  >
    <iframe
      className="absolute top-0 right-0 left-0 bottom-0 w-full h-full"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

export default Video;
