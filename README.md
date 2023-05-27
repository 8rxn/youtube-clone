# Cloned-Tube
 A YouTube like application developed as a prerequisite project for internship at GroCare.

### Deployed - [ 🔗 Cloned-Tube](https://youtube-clone-8rxn.vercel.app/)
![image](https://github.com/8rxn/youtube-clone/assets/75237697/693f496b-ef6d-4eca-8974-3e0c86270df5)


## Walkthrough
- ### Infinite Scroll
The provided API is called in a paginated manner inside of an Infinite Scroll component to create the effect of infinite visual scroll. A loader is added at the end of the current data set

<img width="1280" alt="image" src="https://github.com/8rxn/youtube-clone/assets/75237697/964cecd4-3614-49f4-a3a0-947cf493b9bc">


- ### Filler Page
Wherever necessary filler links were added

![image](https://github.com/8rxn/youtube-clone/assets/75237697/0d706486-fc01-43bb-86e1-2508b4c6a418)


- ### Responsiveness
A mobile responsive design was created using Tailwind CSS and width based logic

![image](https://github.com/8rxn/youtube-clone/assets/75237697/2b2e12e3-dc8c-4622-b538-08f09e10c9c9)


- ### State Management
The app states were managed with `VideoDetails Context` using React useContext()


- ### Search Component
The Search functionality was implemented to search on data linearly

![image](https://github.com/8rxn/youtube-clone/assets/75237697/00fe30d2-da41-43cd-8ced-4b67b84b76b6)


- ### Video Page
The video page was added with displaying relevant information in a user friendly design with adding relevant links to return home and go to the submission hyperlink of that video

![image](https://github.com/8rxn/youtube-clone/assets/75237697/6532be72-1323-4854-ae92-ee36e805a69f)


- ### Skeleton
A skeleton was added before the loading of actual videos on the home page 

![image](https://github.com/8rxn/youtube-clone/assets/75237697/ffa65e06-41ce-4f4e-aae5-1afd06a64591)


# Installing this application in your local environment

### Before running this application, ensure that you have the following software installed:

- Node.js (v12 or later)
- npm (v6 or later)

### Getting Started
Follow the instructions below to get started with this React app:

- ### Clone this repository to your local machine:
`git clone https://github.com/8rxn/youtube-clone.git`

- ### Navigate to the project's directory:
`cd youtube-clone`

- ### Install the project dependencies:
`npm install`

- ### Start the development server:
`npm run dev`

This command will start the development server and open the app in your default browser. Any changes you make to the source files will be automatically reflected in the browser.

- ### Build the production-ready version:
`npm run build`

This command will build the optimized and minified version of your app in the dist directory. You can then deploy the contents of the dist directory to a static file server or any hosting platform of your choice.;

# License
This project is licensed under the MIT License.

# Contact
If you have any questions or suggestions, feel free to reach out to the project maintainer at [rajxryn@gmail.com](mailto:rajxryn@gmail.com)

