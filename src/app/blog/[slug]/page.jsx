import React, { Suspense } from 'react'
import Image from 'next/image'
import styles from "./singlePost.module.css"
import PostUser from '@/components/postuser/PostUser'
// import { getPost} from '@/lib/data'

export const generateMetadata = async({params}) =>{
  const {slug} = params;
  
  const post = await getPost(slug);
  
  return{
    title:post.title,
    description:post.desc

  }
}

const getPost = async(slug) => {
try {
    const post = await fetch(`http://localhost:3000/api/blog/${slug}`);
    return post;
} catch (error) {
  console.log(error);
  throw new Error("Error fetching single post");
}
}

const page = async({params}) => {
  // console.log("params :", params);
  const {slug} = params;
  // console.log(slug);
  const post = await getPost(slug);
  console.log("Slug ---",slug);
  console.log("Params",params);
  // console.log(post)
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
          {post.desc}
        </div>
      </div>
    </div>
  )
}

export default page
