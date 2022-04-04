import React, { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import Stats from "./Stats/Stats";
import ImageUpload from "./ImageUpload/ImageUpload";
import UserGallery from "./UserGallery/UserGallery"
import { StyledContainer } from "../../components/Container/Container.style";
import { Title, StatsUpload, StyledCol } from "./Dashboard.style";
import { getUserGallery } from "../../slices/cloudinary";
import AnimatedPage from "../../animation/AnimatedPage";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [userGalleryResponse, setUserGalleryResponse] = useState([]);
  // const [count , setCount] = useState("");
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();


  useEffect(() => {

    const fetchName = async() => {
      const localName = await JSON.parse(window.localStorage.getItem('user'));
       if (localName !== null) {
        setUserName(localName.username);
        // await console.log(userName)
      } else {
        alert("userName not set");
      }}

    const fetchGallery = async() => {
      //SENDS userName AS A SEARCH PARAMETER TO CLOUDINARY
        setLoading(true);
        dispatch(getUserGallery({ userName }))
          .unwrap()
          .then(function(response)  {
            // setUserGalleryResponse(response.results.resources)
            const resources = response.results.resources;
            const images = resources.map((resource) => {
          
              return {
                id: resource.asset_id,
                //REMOVES THE FOLDER PREFIX AND THE FILE EXTENSION THEN RETURNS THE FILENAME
                //THIS IS SO ONLY THE FILENAME IS DISPLAYED
                title: resource.public_id.split(/(?:\/|\.)+/)[1],
                image: resource.secure_url,
                name: resource.public_id,
            };
          });
          setUserGalleryResponse(images)
          // console.log(images)
            // props.history.push("/dashboard");
            // window.location.reload();
          })
          .catch(() => {
            setLoading(false);
          });
      };
          fetchName();
          fetchGallery();
          setLoading(false);
    },[userName]);

    


  return (
<AnimatedPage>
  <StyledContainer     
  >
    <Title>
      <h1>Dashboard</h1>
    </Title>
    <StatsUpload>
    <StyledCol>
      <Stats 
        name={userName}
        // count={count}
      />
    </StyledCol>
    <StyledCol>
        <ImageUpload
          folderName={userName}
        />
    </StyledCol>
    </StatsUpload>
    <StyledCol>
        <UserGallery
          userGalleryResponse={userGalleryResponse}
        />
    </StyledCol>
  </StyledContainer>
  </AnimatedPage>
     );
};

export default Dashboard;

