import React, { useEffect, useState } from "react";
import clsx from "clsx";
import classes from "./styles.module.scss";

export interface GithubActivityProps {
  rows?: number;
  cols?: number;
  interval?: number; // milliseconds between random updates
  changeRate?: number; // how many squares update per cycle (0–1)
}

export const GithubActivity: React.FC<GithubActivityProps> = ({
  rows = 20,
  cols = 20,
  interval = 300,
  changeRate = 0.1,
}) => {
  const [colors, setColors] = useState<string[][]>(
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => getGreenShade())
    )
  );

  useEffect(() => {
    const id = setInterval(() => {
      setColors((prev) =>
        prev.map((row) =>
          row.map((color) =>
            Math.random() < changeRate ? getGreenShade() : color
          )
        )
      );
    }, interval);

    return () => clearInterval(id);
  }, [interval, changeRate]);

  return (
    <div
      className={clsx(classes.ColorGrid)}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {colors.map((row, i) =>
        row.map((color, j) => (
          <div
            key={`${i}-${j}`}
            className={classes.cell}
            style={{ backgroundColor: color }}
          />
        ))
      )}
    </div>
  );
};

// Generates a green–gray shade
function getGreenShade(): string {
  // 0 → grayish, 1 → bright green
  const intensity = Math.random();
  const green = Math.floor(80 + intensity * 175); // from ~80 to 255
  const redBlue = Math.floor(30 + (1 - intensity) * 60); // small tint for grayness
  return `rgba(${redBlue}, ${green}, ${redBlue})`;
}


// // Generates a green–gray shade with variable opacity
// function getGreenShade(): string {
//   // intensity 0 → gray/transparent | 1 → full bright green
//   const intensity = Math.random();

//   const green = Math.floor(80 + intensity * 175); // 80–255
//   const redBlue = Math.floor(30 + (1 - intensity) * 60); // 30–90
//   const opacity = 0.2 + intensity * 0.8; // 0.2–1.0

//   return `rgba(${redBlue}, ${green}, ${redBlue}, ${opacity})`;
// }

export default GithubActivity;
