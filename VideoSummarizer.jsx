// src/components/VideoSummarizer.js
import React, { useState } from 'react';
//import {Button, Typography } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
//import VideoSummarizer_1 from "./Components/VideoSummarizer/VideoSummarizer_1";
import './VideoSummarizer.css';


const VideoSummarizer_1  = ({ videoUrl }) => {
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSummarize = async () => {
        setLoading(true);
        setSummary(''); // Clear previous summary
        try {
            const transcript = await transcribeVideo(videoUrl);
            const summary = await summarizeTranscript(transcript);
            setSummary(summary);
        } catch (error) {
            console.error("Error summarizing video:", error);
            setSummary('Error summarizing video. Please try again later.'); // Provide user feedback
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="video-summarizer">
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSummarize} 
                disabled={loading}
                className="summarize-button"
            >
                {loading ? 'Summarizing...' : 'Get Summary'}
            </Button>
            {summary && (
                <Typography className="summary-text" variant="body1" style={{ marginTop: '20px' }}>
                    {summary}
                </Typography>
            )}
        </div>
    );
};

const transcribeVideo = async (videoUrl) => {
    const response = await fetch('https://api.transcription-service.com/transcribe', {
        method: 'POST',
        body: JSON.stringify({ url: videoUrl }),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data.transcript;
};

const summarizeTranscript = async (transcript) => {
    const response = await fetch('https://api.openai.com/v1/summarize', {
        method: 'POST',
        body: JSON.stringify({ text: transcript }),
        headers: { 'Authorization': `Bearer YOUR_API_KEY`, 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data.summary;
};

export default VideoSummarizer_1;
