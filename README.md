<h3 align="center">
 <img src="https://res.cloudinary.com/proj3/image/upload/v1651976609/Photomode_Readme/photomode_hero_uzcafr.svg">
 <br/>
	A MERN stack photo-sharing app.
</h3>

<p align="center">
<h1 align="center">
 	<a href="https://photo-mode.herokuapp.com/">Deployed App</a> •
 	<a href="https://github.com/MatteoThomas/photo-mode">Github Repo</a> •
	<a href="https://github.com/MatteoThomas">Github</a>
</h1>
		
- [User story](#user-story)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Development](#future-development)
- [Known Issues](#known-issues)
- [Install](#install)
	- [Clone](#clone)
	- [Environmental variables](#environmental-variables)
	- [Install packages](#install-packages)
- [Dependencies](#dependencies)
- [Bugs / Comments](#bugs--comments)
- [Author](#author)
- [License](#license)
  
# User story
	As a user....
# Usage
	Register /
	Login /
	Upload /
	Delete /
	Explore /
	Write bio /
	Add avatar /
# Screenshots
<p align="left" >
 <img src="https://res.cloudinary.com/proj3/image/upload/v1651974555/Photomode_Readme/Explore2_pihurb.png" width="300" height="250">
 <img src="https://res.cloudinary.com/proj3/image/upload/v1651974555/Photomode_Readme/Dashboard_gfgf7h.png" width="300" height="250">
 <img src="https://res.cloudinary.com/proj3/image/upload/v1651974555/Photomode_Readme/Image_Modal_p9navy.png" width="300" height="250">
</p>

# Future Development
	- Dry up / Organize API calls
	- Implement ContextAPI for user data across app
	- Image comments and likes
  
# Known Issues
# Install
## Clone
```terminal
$ git clone git@github.com:MatteoThomas/photo-mode.git
```

## Environmental variables
	- SECRET
	- MONGODB_URI
	- CLOUD_NAME
	- CLOUD_KEY
	- CLOUD_SECRET

## Install packages
```terminal
$ cd photomode // go to app folder
$ npm i // install packages
$ cd client // go to client folder
$ npm i // install packages
```

# Dependencies
| Front End  | Back End |
| ------------- | ------------- |
| react: 17.0.2 | mongoose: 5.13.7  |
| react-dotenv: 0.1.3  | express: 4.17.2  |
| @cloudinary/react: 1.0.1  | bcryptjs: 2.4.3  |
| @cloudinary/url-gen: 1.5.1  | body-parser: 1.19.1  |
| axios: 0.25.0  | cloudinary: 1.28.1  |
| styled-components: 5.3.3  | concurrently: 7.0.0  |
| framer-motion: 6.2.8  | cors: 2.8.5  |
| jsonwebtoken: 8.5.1  | dotenv: 14.2.0  |
| - | gridfs-stream: 1.1.1  |
| - | jsonwebtoken: 8.5.1  |
| - | multer: 1.4.4  |
| - | multer-gridfs-storage: 5.0.2  |
| - |nodemon: 2.0.15 |
| - | uuid: 8.3.2  |

# Bugs / Comments

[Create Issue](https://github.com/MatteoThomas/photo-mode/issues) 

# Author
[Matthew Elliott](https://melliott.co/)

# License
[MIT](https://github.com/amazingandyyy/mern/blob/master/LICENSE)