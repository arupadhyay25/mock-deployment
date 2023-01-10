import { Button, Center, Heading, Input, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import Styles from "./Login.module.css";

const Login = () => {
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let dispatch = useDispatch();
  let Navigate = useNavigate();
  let isloading = useSelector((s) => s.Authreducer.isLoading);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      let payload = { username, password };
      dispatch(login(payload)).then((r) => {
        if (r.type == "LOGIN_SUCCESS") {
          Navigate("/admin");
        }
      });
    }
    setpassword("");
    setusername("");
  };

  return (
    <div className={Styles.main}>
      <Center>
        <Heading>LOGIN</Heading>
      </Center>
      <br />
      <Center>
        <form onSubmit={handleSubmit}>
          <div>
            <label>User Email</label>
            <br />
            <Input
              mt={2}
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>User Password</label>
            <br />
            <Input
              mt={2}
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <br />
          <Button w={"100%"} type="submit">
            {isloading ? <Spinner /> : "Submit"}
          </Button>
        </form>
      </Center>
    </div>
  );
};

export default Login;
