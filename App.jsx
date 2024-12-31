import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Home/Video/Video";
import VideoSummarizer from "./Components/VideoSummarizer/VideoSummarizer";
import VideoDetails from "./Components/VideoDetails/VideoDetails";


const App = () => {
  const [sidebar, setSidebar] = useState(true);
  
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home  sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video  VideoSummarizer={VideoSummarizer} VideoDetails={VideoDetails}/>} />
        <Route path="/videosummarizer" element={ < VideoSummarizer />} />
        <Route path="/videodetails" element={ < VideoDetails />} />
        
      </Routes>
    </div>
  );
};

export default App;
