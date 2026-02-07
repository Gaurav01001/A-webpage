import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    // loop videos 1 → 4 → 1 → 4
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  // path from public folder
  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      <div className="relative z-10 h-screen w-screen overflow-hidden rounded-lg bg-blue-10">
        

        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div onClick={handleMiniVdClick} className="origin-center">
            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex + 1)}
              loop
              muted
              autoPlay
              playsInline
              id="current-video"
              className="size-64 object-cover"
            //   onLoadStart={() => setIsLoading(true)}
            //   onLoadedData={() => {
            //     setIsLoading(false);
            //     setLoadedVideos((prev) => prev + 1);
            //   }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
