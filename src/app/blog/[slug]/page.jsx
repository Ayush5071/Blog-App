import React from 'react'
import Image from 'next/image'
import styles from "./singlePost.module.css"

const page = () => {
  return (
    <div className={styles.container} >
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={"https://images.pexels.com/photos/25241793/pexels-photo-25241793/free-photo-of-milky-way-over-canyon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
        <Image width={50} height={50} className={styles.avatar} src={"https://images.pexels.com/photos/25241793/pexels-photo-25241793/free-photo-of-milky-way-over-canyon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='' />
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>date</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.2024</span>
        </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, vitae. Fuga labore quia soluta libero repudiandae odit quis. Cum earum pariatur repellat maiores magni quos excepturi repudiandae accusantium accusamus dolor!
        </div>
      </div>
    </div>
  )
}

export default page
