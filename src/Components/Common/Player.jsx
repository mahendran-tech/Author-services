import {useEffect, useRef} from "react";
import lottie from "lottie-web";
import animationData from "../../assets/trans.json";

const Player = () => {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy(); // clean up on unmount
  }, []);

  return <div ref={container} style={{height: "auto", width: "auto"}} />;
};

export default Player;
