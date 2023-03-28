import React from 'react'
import styles from "@/components/SideProjectPage/Tag.module.css"
const Tag = ({item}) => {
  return (
    <div className={styles.container}>{item}</div>
  )
}

export default Tag;