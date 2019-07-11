import React from 'react';
import './App.css';
import Top from './Component/Top'
import Navbar from './Component/Navbar';
import Content from './Component/Content';
function App() {
  return (
    <div className="container-fluid ">
      <div className="row colorfortop">
        <div className=" col-4 float-left">
          <Top />
        </div>
        <div className=" Col-8 float-right">
          <div className="col-2 float-right">
            <Navbar />
          </div>
          <div className="col-5">
            <h1 className="paddingleft">let do what ever you want</h1>
          </div>
        </div>
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

export default App;

// col-xl-4 col-lg-5 col-sm-6
// col-xl-8 col-lg-7 col-sm-6