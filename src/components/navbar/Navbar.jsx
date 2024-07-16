import { auth } from "@/lib/auth";
import Links from "./links/Links"
import styles from  "./navbar.module.css"

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}

export default Navbar
