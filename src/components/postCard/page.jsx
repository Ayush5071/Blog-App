import Image from "next/image"
import styles from "./postcard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/25241793/pexels-photo-25241793/free-photo-of-milky-way-over-canyon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.24</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>Description</p>
        <Link className={styles.link} href={`/blog/${post.id}`} >READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard