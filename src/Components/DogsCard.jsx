import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { deleteitems, getApiData } from "../Redux/AppReducer/action";

const DogsCard = ({ id, name, age, place, gender }) => {
  let images = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
    "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
    "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
  ];
  let dispatch = useDispatch();
  let [searchparams] = useSearchParams();

  let handledelete = () => {
    dispatch(deleteitems(id));
    dispatch(getApiData());
  };
  return (
    <div key={id}>
      <div>
        <img
          src={images[Math.floor(Math.random() * 3)]}
          alt={name}
          style={{ width: "200px", height: "180px" }}
        />
      </div>
      <div>
        <Flex w={"200px"} justifyContent={"space-between"} alignItems="center">
          <Text>{name}</Text>
          <Button onClick={handledelete}>
            <DeleteIcon />
          </Button>
        </Flex>
        <Text>Age : {age} Years</Text>
        <Text>Gender : {gender}</Text>
        <Text>From : {place}</Text>
      </div>
    </div>
  );
};

export default DogsCard;
