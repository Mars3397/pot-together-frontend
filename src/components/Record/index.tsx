import "./Record.css";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFinishRecord } from "hooks/useRecord";

export const Record = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { roomId } = useParams()
  const image = location.state?.image;
  const totalTime = location.state?.time;
  const foodID = location.state?.foodID;
  const recordID = location.state?.recordID;
  const [postContent, setPostContent] = useState("");

  const {
    mutate: finishRecord,
  } = useFinishRecord()

  const handleSaveClicked = () => {
    console.log("image (encoded in base64): ", image);
    console.log("post content: ", postContent);

    const DataURIToBlob = (dataURI: string) => {
      const splitDataURI = dataURI.split(',')
      const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
      const mimeString = 'image/jpeg';

      const ia = new Uint8Array(byteString.length)
      for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

      return new Blob([ia], { type: mimeString })
    }

    const convertWebpToJpeg = (webpDataURI: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = webpDataURI;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width || 0;
          canvas.height = img.height || 0;

          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0);

            // Convert the canvas content to a data URI with JPEG format
            canvas.toBlob(
              (blob) => {
                if (blob) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    resolve(reader.result as string);
                  };
                  reader.readAsDataURL(blob);
                } else {
                  reject(new Error('Failed to convert to JPEG'));
                }
              },
              'image/jpeg', // Specify the desired output format
              1 // JPEG quality (0 to 1)
            );
          } else {
            reject(new Error('Canvas context not supported'));
          }
        };

        img.onerror = (error) => {
          reject(error);
        };
      });
    };

    convertWebpToJpeg(image)
      .then((jpegDataURI) => {
        console.log('Converted to JPEG:', jpegDataURI);
        // Now you can use the JPEG data URI as needed
        let formData = new FormData();
        formData.append("image", DataURIToBlob(jpegDataURI), "image.jpeg");
        formData.append("interval", totalTime);
        formData.append("interrupt", "0");
        formData.append("caption", postContent);
        formData.append("status", "1");
        finishRecord({
          recordID: recordID,
          formData: formData,
        }, {
          onSuccess: () => {
            navigate(`/room/${roomId}/cooking/done`, { state: { totalTime: totalTime, foodID: foodID } })
          },
        })
      })
      .catch((error) => {
        console.error('Conversion error:', error);
      });
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
