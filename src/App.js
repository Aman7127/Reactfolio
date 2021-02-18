/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import Mynavbar from "./components/Navbar/mynavbar.component";
import Mycarousal from "./components/carousel/mycarousel.components";
import TitleMessage from "./components/my-title/my-title.component"

import './App.css';


function App() {
  return (
    <div >
      <Mynavbar />
      <Mycarousal />
      <TitleMessage />

      <h1><center>My portfolio</center></h1>
    </div>
  );
};

export default App;
