import React, { useEffect } from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export const ReportsPage = () => {
  let [dogsrecord, setdogsrecord] = useState([]);

  useEffect(() => {
    axios
      .get("https://masai-fake-jsonserver.onrender.com/dogs")
      .then((r) => setdogsrecord(r.data))
      .catch((e) => console.log("error"));
  }, []);

  let [total, settotal] = useState(0);
  let [female, setfemale] = useState(0);
  let [male, setmale] = useState(0);
  let [Avg, setavg] = useState(0);

  useEffect(() => {
    if (dogsrecord.length > 0) {
      let getavg = 0;
      dogsrecord.forEach((e) => (getavg += Number(e.age)));
      settotal(dogsrecord.length);
      setfemale(dogsrecord.filter((e) => e.gender == "Female").length);
      setmale(dogsrecord.filter((e) => e.gender == "Male").length);
      setavg(getavg / dogsrecord.length);
    }
  });

  return (
    <div>
      <Center>
        <Heading>ReportsPage</Heading>
      </Center>
      <br />
      <Center>
        <TableContainer w={"50%"}>
          <Table size="sm">
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Total number of dogs attending</Td>
                <Td isNumeric>{total}</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Number of female dogs attending</Td>
                <Td isNumeric>{female}</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Number of female dogs attending</Td>
                <Td isNumeric>{male}</Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>Average age group of dogs attending</Td>
                <Td isNumeric>{Avg}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </div>
  );
};
