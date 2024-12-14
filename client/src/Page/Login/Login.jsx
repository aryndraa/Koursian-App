import { useNavigate } from "react-router-dom";
import Layout2 from "../layout/Layout2";
import {useForm} from "react-hook-form"

const Login = () => {
const navigate = useNavigate()

  const dummyUser = {
    username: "1",
    password: "1",
  };
const { register, handleSubmit } = useForm();

const onsubmit = (data) => {
const {username, password} = data 

  if (username === dummyUser.username && password === dummyUser.password) {
    navigate("/dashboard")
    alert("Login successful!");
  } else {
    alert("Invalid username or password");
  }
}

  return (
    <Layout2
      main={
        <div>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="userName">Username</label>
                <input
                  type="username"
                  name="username"
                  className="Input font-Open-sauce"
                  placeholder="Username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="Input font-Open-sauce"
                  placeholder="Password"
                  {...register("password", {
                    required: "passsword is required",
                  })}
                />
              </div>
              <a
                href="/"
                className="font-Open-sauce font-medium text-xs text-primary text-right"
              >
                Forgot Password
              </a>
              <button className="Button"> Sign in</button>
              <p className="text-center font-Open-sauce text-black">
                don't have an account?{" "}
                <a
                  href="/register"
                  className="font-Open-sauce font-semibold text-xs text-primary text-right"
                >
                  Sign up
                </a>{" "}
              </p>
            </div>
          </form>
        </div>
      }
    ></Layout2>
  );
};

export default Login;
