/* eslint-disable @typescript-eslint/no-explicit-any */

import "./App.css";
import Webcam from "react-webcam";

function App() {
  // const [source, setSource] = useState("");
  // const handleCapture = (target: any) => {
  //   if (target.files) {
  //     if (target.files.length !== 0) {
  //       const file = target.files[0];
  //       const newUrl = URL.createObjectURL(file);
  //       setSource(newUrl);
  //     }
  //   }
  // };
  return (
    <>
      WASUUPPPPPP
      <Webcam
        videoConstraints={{
          facingMode: "environment",
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
