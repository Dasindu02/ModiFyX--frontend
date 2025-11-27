import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/1124(3).mp4";

const LoadingVideo = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/Home");
  };

  // Fallback in case the video doesn't auto-play or ends prematurely
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Home");
    }, 10000); // 10 seconds fallback

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="w-full h-full relative">
        {/* Video Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            autoPlay
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        <button
          onClick={() => navigate("/Home")}
          className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-black/70 transition-colors duration-300 text-sm"
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default LoadingVideo;