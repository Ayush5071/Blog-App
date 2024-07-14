import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

const PostUser = async({userid}) => {
    const user = await getUser(userid);
    console.log(user)
  return (
  <div className={styles.container}>
    <span className={styles.title}>Name</span>
    <span className={styles.username}>{user.username}</span>
  </div>
  )
}

export default PostUser