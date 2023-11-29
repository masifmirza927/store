import React, { useState } from 'react'
import axios from 'axios';

const Upload = () => {
    const [image, setImage] = useState(null);

    const handleFileUpload = () => {

        axios.post("http://127.0.0.1:4000/uploading", {
            image: image
          }, {
            headers: {
              "Content-Type": "multipart/form-data"
            },
          })
          .then((response) => {
            // handle the response
            console.log(response);
          })
          .catch((error) => {
            // handle errors
            console.log(error);
          });
      };
      
  return (
    <div>
      <input type="file" onChange={ (e) => { setImage(e.target.files[0]) } } />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  )
}

export default Upload