import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/1124(3).mp4";

const LoadingVideo = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/Home");
  };

  return (
    <video
      autoPlay
      onEnded={handleVideoEnd}
      className="w-full h-full object-cover"
    >
       <source src={video} type="video/mp4" />
    </video>
  );
};

export default LoadingVideo;
