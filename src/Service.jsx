import React from "react";
import Card from "./Card";
import  Sdata  from "./Sdata";
// import img1 from './images/web.png';
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, index) => {
                return (
                  <Card key={index} imgsrc={val.img} title={val.title} content={val.content} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
