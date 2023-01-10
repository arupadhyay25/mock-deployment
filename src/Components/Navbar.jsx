import { Button, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  let auth = useSelector((s) => s.Authreducer.isAuth);
  let token = useSelector((s) => s.Authreducer.token);
  return (
    <div id="navbar">
      <div>
        <Link to={"/"}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/484/042/small/dog-logo-illustration-free-vector.jpg"
            width="120px"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Heading>Dog A’Fair</Heading>
      </div>
      <div>
        {!auth ? (
          <Link to="/login">
            <Center>
              <img
                src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
                width="60px"
                alt="logo"
              />
            </Center>
            <Text fontWeight={"bold"}>Admin Login</Text>
          </Link>
        ) : (
          <h4>Hi {token}</h4>
        )}
      </div>
    </div>
  );
};

export default Navbar;
