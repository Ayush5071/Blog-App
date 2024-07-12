"use client"
import React, { useState } from 'react';
import styles from "./links.module.css";
import NavLink from './navLink/navLink';
import LoginPage from '@/app/(auth)/login/page';
import Image from 'next/image';
const Links = () => {
    
  const [open,setOpen] = useState(false);

  const links = [
    {
      title: 'Home',
      path: "/"
    },
    {
      title: 'About',
      path: "/about"
    },
    {
      title: 'Contact',
      path: "/contact"
    },
    {
      title: 'Blog',
      path: "/blog"
    },
  ];

  const session = true;
  const isadmin = true;

  return (
    <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title}  />
      ))}
      {
        session ? (
            <>
            
            {isadmin && <NavLink item={{title:"Admin",path:"/admin"}}/>}
            <button className={styles.logout}>logout</button>

            </>
            

        ) : (
            <NavLink item={{title:"login",path:"/login"}}/>
        )}
    </div>
    <Image className={styles.menuButton} src={"/menu.png"} onClick={()=> setOpen((prev) => !prev)} alt="" height={30} width={30}  />
    {
        open ? <div className={styles.mobileLinks}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
            </div> : ""
    }

    </div>
    
  );
}
export default Links;

