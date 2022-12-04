import React, { useRef, useState, useEffect } from "react";

const Myinput = (props) => {
  const [data, setData] = useState("");
  const [errMess, setErrMess] = useState("");
//   const onChangeHandler = (data) => {
//     setData(data);
//   };
  const handleOutFocus = () => {
    console.log(data);
    data.trim().length === 0 && setErrMess("Input field is required");
  };

  const Rref = useRef();

  useEffect(() => {
    Rref.current.focus();
    console.log(Rref);
  }, []);

  return (
    <div>
      <input
        ref={Rref}
        type="text"
        {...props}
      />
      <p>{data}</p>
      {errMess && <p>{errMess}</p>}
    </div>
  );
};

export default Myinput;
