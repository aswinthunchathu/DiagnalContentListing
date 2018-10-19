This Project is a mobile browser version of content Listing page with lazy loading and search features developed using **ReactJs** and **Redux** architecture.

  ## Other libraries used
    Axios
    Redux Thunk
    Tailwind CSS
    React CSS Transition Group

  ## Other Utilities used for development
    REDUX_DEVTOOLS_EXTENSION for chrome
    React Inspector for Chrome

##Issue faced
The dimensions mentioned in the wireframe was not giving the same look and feel as in the wireframe, so I have modified it to give the look and feel close to wirefame

  ## Modifications 
    Pixels between Image and Name changed from 24px to 13px
    The left and right gap of the container is mentioned as 30px each, which are modifed to 16px each
    Horizontal Gap between tiles changed from 30px to 16px
    Vertical Gap between tiles changed from 90px to 34px
    Font size of the name modified from 36pt to 16px (1rem)

## Folder Structure
content-list/
  README.md
  node_modules/
  package.json
  postcss.config.js
  tailwind.js
  public/
    assets
    index.html
    favicon.ico
  src/
    actions
      This folder contains all the actions/ thunk actions used in this folder
    assets
    components
      This folder contains all the dump components
    constants
      This folder contains all the constants used across this application
    containers
       This folder contains all the components that are connected to redux store
    reducer
      This folder contains all the reducers related to this application
    App.js
    App.test.js
    index.css
    index.js

## Start Application
To start the application run the below commands in the root folder where package.json exist.
  
  **npm run start:te**
  This commad build the tailwind css and keep a watch on changes

  **npm start**
  This commad will start the application and serve the pages in localhost:3000/

## Other Commands

  **npm run build**
  This will trigger an optimised build

  **npm run deploy**
  This will deploy the application to GitHub

  
