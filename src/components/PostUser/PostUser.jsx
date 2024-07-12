import styles from "./postUser.module.css";
const getData = async(slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
    return res.json();
}
const PostUser = async({userid}) => {
    const user = await getData(userid);
  return (
  <div className={styles.container}>
    <span className={styles.title}>Name</span>
    <span className={styles.username}>{user.name}</span>
  </div>
  )
}

export default PostUser
