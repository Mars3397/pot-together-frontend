import "./Record.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const Record = () => {
  const location = useLocation();
  const image = location.state?.image;
  const [postContent, setPostContent] = useState("");

  const handleSaveClicked = () => {
    console.log("image (encoded in base64): ", image);
    console.log("post content: ", postContent);
  };

  return (
    <div id="record">
      <div className="content">
        <div className="image-container">
          <img className="capture-image" src={image} alt="" />
        </div>
        <div className="post-container">
          <div className="hint-text">Write about your effort...</div>
          <textarea
            className="post-area"
            rows={5}
            placeholder={"Enter text ..."}
            value={postContent} // ...force the input's value to match the state variable...
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <button className="save-button" onClick={handleSaveClicked}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Record;
