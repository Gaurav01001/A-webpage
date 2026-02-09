import { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
const Hero = () => {
  const totalVideos = 4;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextVideoRef = useRef(null);

  // get video path from public folder
  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  // calculate next video safely (1 → 4 → 1 loop)
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  // when main video loads
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
    setIsLoading(false);
  };

  // click mini preview → switch video
  const handleMiniVdClick = () => {
    setCurrentIndex(upcomingVideoIndex);
  };

  return (
     <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
      <div>
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-300 ease-in hover:scale-100 hover:opacity-100">
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
        <video
          src={getVideoSrc(currentIndex)}
          ref={nextVideoRef}
          loop
          muted
          id="next-video"
          onLoadedData={handleVideoLoad}
          className="absolute-center invisible absolute z-20 size-64 object-center"
         
        />
        <video
          src={getVideoSrc(currentIndex===totalVideos-1 ? 1: currentIndex)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}

          />
          </div>
       <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
          <Button 
          id="watch-trailer"
          title="watch-taiiler"
          leftIcon={<TiLocationArrow  />} containerClass="!bg-yellow-300 flex-center gap-1" 
            />
          </div>
        </div>

        </div>
  <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
          G<b>A</b>MING
        </h1>


      </div>
 
  );
};

export default Hero;
