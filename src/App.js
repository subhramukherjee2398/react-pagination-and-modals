import "./styles.css";
import FilterData from "./Component/FilterData";
import TabSelector from "./Component/TabFilter";
import data from "./utils";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Modal from "@netojose/react-modal";

export default function App() {
  const [alldata, setAllData] = useState();
 

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setAllData(res.data.products);
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);



  return (
    <div className="App">
      {/* <TabSelector /> */}
      <Navbar />
      <div className="table-conatinet-data">
        <Header />
        <FilterData data={alldata && alldata} />
      </div>
    </div>
  );
}
