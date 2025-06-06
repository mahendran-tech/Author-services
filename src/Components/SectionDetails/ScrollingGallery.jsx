import {useEffect, useState} from "react";
import Marquee from "react-fast-marquee";

const ScrollingGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("assets/client.json");
        const data = await response.json();

        if (Array.isArray(data)) {
          const uniqueImages = [];
          const seen = new Set();

          data.forEach((item) => {
            if (item.csimage && !seen.has(item.csimage)) {
              seen.add(item.csimage);
              uniqueImages.push(item.csimage);
            }
          });

          setImages(uniqueImages.slice(0, 60));
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-[60px] mt-3 mb-3 flex items-center overflow-hidden">
      <Marquee speed={40}  pauseOnHover={true} gradient={false}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Gallery"
            className="h-[50px] ml-2  p-1"
            style={{height: "65px", marginLeft: "30px"}}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingGallery;
