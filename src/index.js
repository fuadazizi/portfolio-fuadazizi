import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './Assets/Styles/index.scss';
import reportWebVitals from './reportWebVitals';
import Homepage from './Page/Homepage';

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fass } from "@fortawesome/sharp-solid-svg-icons";
// import { fasds } from "@fortawesome/sharp-duotone-solid-svg-icons";
// import { faHatCowboy } from "@fortawesome/pro-thin-svg-icons";
// import { faHatChef } from "@fortawesome/sharp-solid-svg-icons";
// import { faPlateUtensils } from "@fortawesome/sharp-regular-svg-icons";
library.add(fas, far, fab);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
