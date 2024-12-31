// src/components/VideoDetail.js
import React from "react";
//import { Paper, Typography, Button } from "@material-ui/core"; // Import Material-UI Button
 // Import the summarizer
import './VideoDetails.css';
import VideoSummarizer_1 from "../VideoSummarizer/VideoSummarizer";

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>;
    
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (       <div className="video-detail">
            <Paper elevation={6} className="video-player">
                <iframe
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    title="Video Player"
                    src={videoSrc}
                />
            </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography className="video-title" variant="h4">
                    {video.snippet.title} - {video.snippet.channelTitle}
                </Typography>
                <Typography className="video-channel" variant="subtitle1">
                    {video.snippet.channelTitle}
                </Typography>
                <Typography className="video-description" variant="subtitle2">
                    {video.snippet.description}
                </Typography>
                
                {/* Subscribe Button */}
                <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
                    Subscribe
                </Button>
                
                {/* Video Summarizer Button */}
                <VideoSummarizer_1 videoUrl={videoSrc} />
            </Paper>
        </div>
    );
};

export default VideoDetail;
