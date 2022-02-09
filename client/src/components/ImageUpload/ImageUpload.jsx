import React, { useState } from "react";
import "./ImageUpload.css";


const ImageUpload = () => {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
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
        console.error('AHHHHHHHH!!');
        setErrMsg('something went wrong!');
    };
};
  
  const uploadImage = async (base64encodedImage) => {
  
    const allData = JSON.stringify({ data: base64encodedImage, folder: "flat", name: name}) 
   
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
      <div>
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
          {previewSource && (
          <button className="uploadBtn" type="submit">
            Submit
          </button>
          )}
          </div>
         <input 
          type="text" 
          name="name" 
          onChange={e => setName(e.target.value)}
          value={name} 
          className="form-input"
          placeholder=" Name"
        />
      </form>
      {previewSource && (
        <img 
          src={previewSource} 
          alt="chosen" 
          />
      )}
    </div>
  );
};
export default ImageUpload;
