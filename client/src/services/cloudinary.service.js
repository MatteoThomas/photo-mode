import axios from "axios";

const CLOUDINARY_URL = "http://localhost:8080/api/cloudinary/";

const getUserGallery = async (userName) => {
  return await axios.get(CLOUDINARY_URL + "usergallery", {
    params: { folderData: userName },
  });
};

const getExploreGallery = async () => {
  return await axios.get(CLOUDINARY_URL + "gallery", {});
};

const getLandingGallery = async () => {
  return await axios.get(CLOUDINARY_URL + "landing", {});
};

const getBio = async () => {
  return await axios.get(CLOUDINARY_URL + "bio", {});
};

const cloudinaryService = {
  getUserGallery,
  getExploreGallery,
  getLandingGallery,
  getBio,
};

export default cloudinaryService;
