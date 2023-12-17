import "./CameraCapture.css";
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; //
import CircleIcon from "@mui/icons-material/Circle";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DoneIcon from "@mui/icons-material/Done";
import starIcon from "assets/orange-star.svg";

export const CameraCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  // You may notice that the height and the width are reversed,
  // This is an unknown bug that I have not been able to fix.
  // Some people reported that they have encountered the same issue.
  // But currently, I have not found a solution to this.
  const videoConstraints = {
    facingMode: "environment",
    width: 550,
    height: 300,
  };

  // Create a capture function
  // The captured image will be a base64 encoded string
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = (webcamRef.current as any).getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <div id="webcam">
      <div className="content">
        <div className="page-title">
          <img src={starIcon} alt="" />
          <div className="text-wrapper">Take a photo</div>
          <img src={starIcon} alt="" />
        </div>
        <div className="capture-window">
          {imgSrc ? (
            <img src={imgSrc} alt="webcam" />
          ) : (
            <Webcam
              videoConstraints={videoConstraints}
              ref={webcamRef}
              screenshotQuality={1}
            />
          )}
        </div>
        {imgSrc ? (
          <div className="button-wrapper">
            <RestartAltIcon className="icon-button" onClick={retake} />
            <DoneIcon className="icon-button" />
          </div>
        ) : (
          <CircleIcon className="icon-button" onClick={capture} />
        )}
      </div>
    </div>
  );
};

export default CameraCapture;
