import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import { getApiData } from "../Redux/AppReducer/action";
import Styles from "./DataPage.module.css";
import DogsCard from "../Components/DogsCard";
import { Image } from "@chakra-ui/react";

const DataPage = () => {
  let dispatch = useDispatch();
  let dogsrecord = useSelector((s) => s.Appreducer.dogs);
  let location = useLocation();
  let [searchparams] = useSearchParams();

  useEffect(() => {
    if (location) {
      let gender = searchparams.getAll("gender");
      let queryparams = {
        params: {
          gender: gender,
        },
      };
      dispatch(getApiData(queryparams));
    }
  }, [location]);

  return (
    <div className={Styles.main}>
      <div className={Styles.filter}>
        <Filter />
      </div>
      <div className={Styles.grid}>
        {dogsrecord.length == 0 ? (
          <div style={{ width: "20%", margin: "auto", paddingTop: "150px" }}>
            <Image src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
          </div>
        ) : (
          dogsrecord.map((e, i) => {
            return (
              <DogsCard
                key={i}
                id={e.id}
                name={e.name}
                age={e.age}
                place={e.place}
                gender={e.gender}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default DataPage;
