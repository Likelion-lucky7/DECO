import axios from 'axios';
import React, { useState } from 'react'
import SideProjectCard from './SideProjectCard';
import styles from "./SideProjectList.module.css"
import { useEffect } from 'react';

const SideProjectList = () => {

  let [props, setProps] = useState([]);

  const getData = async () => {
    let response = await axios.get(`http://localhost:3001/contents`);
    let data = await response.data;
    setProps(data);
  };

  useEffect(()=>{getData()},[])

  return (
    <div className={styles.container}>
      {props.map((item)=>{return<SideProjectCard key={item.id} item={item}/>})}
  
    </div>
  )
}

export default SideProjectList;