/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useState } from "react";
import "./App.css";
import Webcam from "react-webcam";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER,
};

function App() {
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const handleClick = useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);
  return (
    <>
      WASUUPPPPPP
      <button onClick={handleClick}>Switch camera</button>
      <Webcam
        videoConstraints={{
          ...videoConstraints,
          facingMode,
        }}
        width={300}
        height={400}
        screenshotFormat="image/jpeg"
      />
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        capture="environment"
      />
    </>
  );
}

export default App;
