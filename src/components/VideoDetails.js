import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading</div>;
  const videoSrc = `https://wwww.youtube.com/embed/${video.id.videoId}`;

  console.log(video);
  return (
    <>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          title="video player"
          height="100%"
          width="100%"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} -- {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetails;
