import React from 'react'
import SideProjectCard from './SideProjectCard';
import styles from "./SideProjectList.module.css"

const SideProjectList = () => {
  return (
    <div className={styles.container}>
    <SideProjectCard />
    <SideProjectCard />
    <SideProjectCard />
    </div>
  )
}

export default SideProjectList;