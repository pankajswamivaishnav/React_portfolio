import React, { useState } from "react";

const Contact = () => {

   const [data, setData] = useState({
      fullname:"",
      email:"",
      number:"",
      msg:""
   })

   const inputEvent = (event) =>{
      const {name, value} = event.target;
      setData((preVal)=>{
         return{
            ...preVal,
         [name]:value
         }
      })
   }

   const formSubmit = (e)=>{
      e.preventDefault();
      alert('Form Submited Successfully');
   };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Me</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            {/* form */}
            <form onSubmit={formSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange = {inputEvent}
                  placeholder="Enter Your Name"
                  autoComplete="off"
                />
              </div>
              <div class="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange = {inputEvent}
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
              </div>
              <div class="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  value={data.number}
                  onChange = {inputEvent}
                  placeholder="Phone Number"
                  autoComplete="off"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange = {inputEvent}
                  placeholder="Enter Your Massage"
                  autoComplete="off"
                ></textarea>
              </div>
              <div className="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
