import axios from "axios";

const CLOUDINARY_URL = "https://photo-mode.herokuapp.com/api/cloudinary/";
// const CLOUDINARY_URL = "http://localhost:8080/api/cloudinary/";

const getUserGallery = async (userName) => {
  return await axios.get(CLOUDINARY_URL + "usergallery", {
    params: { folderData: userName },
  });
};

const getExploreGallery = async () => {
  return await axios.get(CLOUDINARY_URL + "gallery", {});
};

const cloudinaryService = {
  getUserGallery,
  getExploreGallery,
};

export default cloudinaryService;
