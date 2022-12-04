import React, {useState} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


import Myinput from "./Input";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const [mess, setMess] = useState('');
  const [errMess, setErrMess] = useState('');
  console.log(mess);

  const handleOutFocus = () => {
    mess.trim().length === 0 && setErrMess("Input field is required");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Lets sign you in.</h2>
      <br />

      {/* <input {...register("email")} placeholder="email" type="email" /> */}
      <Myinput
        {...register("email")}
        onChange={(e) => {
          setValue("email", e.target.value);
          setMess(e.target.value);
        }}
        onBlur={handleOutFocus}
      />
      <p>{errMess && errMess}</p>
      <p>{errors.email?.message}</p>
      <br />

      <input {...register("password")} placeholder="password" type="password" />
      <p>{errors.password?.message}</p>
      <br />

      <button type="submit">Sign in</button>
    </form>
  );
};

export default Form;
