import React, { Suspense } from 'react'
import Image from 'next/image'
import styles from "./singlePost.module.css"
import PostUser from '@/components/postuser/PostUser'

//fetch data using an api
const getData = async(slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,{next:{revalidate:3600}}); // refreshing the data after 3600s every time
  if(!res.ok){
    throw new Error('Soemthing went wrong');
  }
  return res.json();
}

const page = async({params}) => {
  const {slug} = params;
  const post = await getData(slug);
  return (
    <div className={styles.container} >
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={"https://images.pexels.com/photos/25241793/pexels-photo-25241793/free-photo-of-milky-way-over-canyon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
        <Image width={50} height={50} className={styles.avatar} src={"https://images.pexels.com/photos/25241793/pexels-photo-25241793/free-photo-of-milky-way-over-canyon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='' />
        {/* to show skeleton while loading the nameof the user */}
        <Suspense fallback={<div>Loading...</div>}> 
          <PostUser userid = {post.userId} />
        </Suspense>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.2024</span>
        </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default page
