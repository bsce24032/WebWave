let IS_PROD = true;

// local testing set to false and true deployment set to true

const server = IS_PROD ?
    "https://webwave-tb7e.onrender.com" :
    "http://localhost:8000" 


export default server;