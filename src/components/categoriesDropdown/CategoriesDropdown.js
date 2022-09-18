/**
 * @author Mevan Nirosh
 * @version 1.0
 * @since 08-05-2022
 */
import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080/api/v1/category`,
});

const CategoriesDropdown = (props) => {
  const [data, setData] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [inputValue, setValue] = useState("");

  
  const handleInputChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    api
      .get("/findAll")
      .then((res) => {
        const payload = res.data.map((cat) => {
          return { Cid: cat.id, label: cat.categoryName };
        });
        setData(payload);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  return (
  <Select options={data} onChange={props.onChange}/>
  );
}
export default CategoriesDropdown;
