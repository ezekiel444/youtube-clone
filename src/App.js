import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoDetails, VideoList } from "./components";

import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async searchterm => {
    let result = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "", //provide your youtube api key
        q: searchterm
      }
    });
    setVideos(result.data.items);
    setSelectedVideo(result.data.items[0]);
  };

  useEffect(() => {
    handleSubmit("Best of football skills");
  }, []);

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
