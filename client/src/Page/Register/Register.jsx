import { useState } from "react";
import Layout2 from "../layout/Layout2";
import { useForm } from "react-hook-form";

const Register = () => {
const {password, setPassword} = useState("")

  const dummy ={
    email:"",
    username:"",
    password:{password}
  }

  const {register, handlesubmit} =useForm();

   const onSubmit = (data) => {
    const {username, password, email} = data

  }

  return (
  <Layout2
  main={
  <div>

  </div>
  }
  >
  </Layout2>
  );
};

export default Register;
