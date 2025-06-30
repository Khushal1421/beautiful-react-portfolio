import { useEffect } from "react";
import { useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration (for meteors)

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => { // doing it to adjust stars no. acc. to screen-size
        generateStars();
    };

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener("resize", handleResize); // Do it so we don't have any Memory Leaks?
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      // doing cuz no. of stars can Change acc. to Screen size
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // doing it so star size is between 1 to 4 px and it looks realistic
        x: Math.random() * 100, // 100 is %; So we're placing it anywhere in ViewPort (0 to 100%)
        y: Math.random() * 100, // x & y are pos'n of Stars
        opacity: Math.random() * 0.5 + 0.5, // We're setting random opacity b/w 0.5 & 1; so some stars can look faint and some bright
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // doing it so star size is between 1 to 4 px and it looks realistic
        x: Math.random() * 100, // 100 is %; So we're placing it anywhere in ViewPort (0 to 100%)
        y: Math.random() * 20, // x & y are pos'n of Stars
        delay: Math.random() * 15, // We're setting random opacity b/w 0.5 & 1; so some stars can look faint and some bright
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        /> // star:-  in @utility star
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50+ "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        /> // star:-  in @utility star
      ))}
    </div>
  );
};
