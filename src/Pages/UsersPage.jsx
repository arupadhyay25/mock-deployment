import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { postdogdata } from "../Redux/AppReducer/action";
import Styles from "./UserPage.module.css";

export const UsersPage = () => {
  let [name, setname] = useState("");
  let [age, setage] = useState("");
  let [gender, setgender] = useState("");
  let [place, setplace] = useState("");

  let HandleRegister = () => {
    let payload = {
      name,
      age,
      gender,
      place,
    };
    postdogdata(payload);
    setname("");
    setage("");
    setplace("");
    alert("Registed Succesfully !!!")
  };

  return (
    <div className={Styles.main}>
      <Center>
        <Heading>Welcome to Dog A’Fair </Heading>
      </Center>
      <br />
      <Center>
        <Image src="https://petfed.org/images/1659617797-1_Schedule_Del.png" />
      </Center>
      <br />
      <Center>
        <Heading>Register Your Dog Today</Heading>
      </Center>
      <br />
      <Center>
        <Text>
          Enter The Details Below <ArrowDownIcon />{" "}
        </Text>
      </Center>
      <br />
      <Center>
        <Input
          w="50%"
          variant="filled"
          placeholder="Name of Dog"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </Center>
      <br />
      <Center>
        <Input
          w="24%"
          mr="2%"
          variant="filled"
          placeholder="Age of Dog"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
        <Select
          w="24%"
          onChange={(e) => setgender(e.target.value)}
          placeholder="Select Gender"
          value={gender}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>
      </Center>
      <br />
      <Center>
        <Input
          w="50%"
          variant="filled"
          placeholder="Enter You Adreess"
          value={place}
          onChange={(e) => setplace(e.target.value)}
        />
      </Center>
      <br />
      <Center>
        <Button
          w="50%"
          variant="solid"
          colorScheme={"teal"}
          onClick={HandleRegister}
        >
          Register
        </Button>
      </Center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
