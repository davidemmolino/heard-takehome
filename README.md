# Getting started
Welcome to the Heard Transaction Software repository! This software allows you to manage and process transactions efficiently. Follow the instructions below to get started.

## Clone the repository
First, clone the Heard Transaction Software repository to your local machine.
```
git clone https://github.com/your-username/heard-takehome.git
cd heard-takehome
```

## Install front-end submodules
```
cd heard-takehome
git submodule update --init
```

## Install back-end and run server
Navigate to the server directory and install backend dependencies, then run the server
```
cd server
npm install
npm run dev
```

## Install front-end and starting apps
```
cd heard-frontend
npm install
npm start
```

## Usage
Once you've followed the steps above, open your web browser and go to http://localhost:3000 to access the Heard Transaction Software.

Note: Make sure the backend server is running for full functionality.

## Dependencies 
These are the dependencies required to run the frontend of the Heard Transaction Software. Make sure you have them installed before starting the application.
### Front-end
```
"dependencies": {
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "axios": "^1.6.2",
  "prop-types": "^15.8.1",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4"
}
```

To install these run
```
cd heard-frontend
npm install
```
### Back-end
```
"dependencies": {
  "cors": "^2.8.5",
  "express": "^4.18.2",
  "mongoose": "^8.0.2",
  "nodemon": "^3.0.2",
  "uuid": "^9.0.1"
}
```
To install there run
```
cd server
npm install
```

## Stretch Goals
- Added validation for transaction form
- Leveraged TypeScript
- Added PropType support
- Interactivity for the table such as sorting and filtering
- Full testing suite using Jest/RTL/MSW
- Accessibility Testing
- More robust state management framework e.g. Redux/RTK
- Add a linter/formatter for pretty and consistent code