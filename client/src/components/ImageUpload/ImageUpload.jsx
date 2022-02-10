import React, { useState } from "react";
import "./ImageUpload.css";


const ImageUpload = ({ folderData }) => {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [tag, setTag] = useState();
  const [name, setName] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');

const handleFileInputChange = (e) => {
  const file = e.target.files[0]
  previewFile(file)
  setSelectedFile(file)
  setFileInputState(e.target.value);
}
const previewFile = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = () => {
    setPreviewSource(reader.result)
  }
}

const handleSubmitFile = (e) => {
  e.preventDefault();
  if (!selectedFile) return;
  const reader = new FileReader();
  reader.readAsDataURL(selectedFile);
  reader.onloadend = () => {
    uploadImage(reader.result);
  };
  reader.onerror = () => {
    console.error('Error');
    setErrMsg('something went wrong!');
  };
};

const uploadImage = async (base64encodedImage) => {
  const folder = folderData
 console.log(folder)
  const allData = JSON.stringify({ 
    data: base64encodedImage, 
    folder:folder, 
    name: name, 
    tag: tag,
  }) 
  
  try {
    const data = new FormData();
    data.append("file", selectedFile);
    
      await fetch('/api/upload', {
        method: "POST",
        body: allData,
        headers: { 'Content-Type': 'application/json' },

      })
      setPreviewSource("");
  } catch (err) {
    console.error(err);
  }
}

  return (
    <div className="imageUpload">
      <div className="titleUpload">
      <h1>Upload</h1>
      </div>
      <form onSubmit={handleSubmitFile}>
       <div className="topBtnRow">
        <input 
          type="file" 
          name="image" 
          onChange={handleFileInputChange} 
          value={fileInputState} 
          className="form-input" 
        />
         <input 
          type="text" 
          name="name" 
          onChange={e => setName(e.target.value)}
          value={name} 
          className="form-input"
          placeholder=" Name"
          />
                <input 
          type="text" 
          name="tag" 
          onChange={e => setTag(e.target.value)}
          value={tag} 
          className="form-input"
          placeholder=" Tags"
          />

        </div>
          
      
          {previewSource && (
          <button className="uploadBtn" type="submit">
            Submit
          </button>
          )}
      </form>
      {previewSource && (
        <img 
        className="previewImg"
          src={previewSource} 
          alt="chosen" 
          />
      )}
    </div>
  );
};
export default ImageUpload;
