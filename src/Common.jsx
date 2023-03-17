import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) =>{
    return(
        <>
        <section id="header" style={{marginTop:100}}>
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  {/*left part  */}
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
        {props.name}<strong className="text-primary ms">PankajProgrammer </strong>
        
                  </h1>
                  <h2 className="my-3">
                   {props.content}
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary">{props.btnname}</NavLink>
                  </div>
                </div>
  
                 {/* right part */}
                 <div className="col-lg-6 order-1 order-lg-2 header-img ">
                    <img src={props.imgsrc} className='img-fluid animated-img ' style={{height:300}} alt="header_img" />
                 </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default Common;