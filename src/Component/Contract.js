import React, { useState } from "react";
import Buttom from "./Buttom";

const Contract = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [click, setClick] = useState("");

  const onChange = (val) => {
    let { value, name } = val.target;
    setInput((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setClick(input);
    setInput({name:"",email:"",text:""})
    
  };

  return (
    <>
      <h2 className="text-center m-3">Contract us</h2>
      {click ? (
        <p>
          My name is: ({click.name}) my gmail is: ({click.email}) my text is:{" "}
          {click.text}
        </p>
      ) : null}
      <div className="w-50 m-auto mb-5">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={onChange}
              value={input.name}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={onChange}
              value={input.email}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="text"
              onChange={onChange}
              value={input.text}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Buttom />
    </>
  );
};

export default Contract;
