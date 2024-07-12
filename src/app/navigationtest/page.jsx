"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Navigation = () => {

    // CLIENT SIDE NAVIGATION
    const router = useRouter();
    const pathName = usePathname();
    const query = useSearchParams();


    const handleClick = () => {
        router.push("/");
    }
    console.log(pathName);
    console.log(query.get('q'));
    console.log(query.get('name'));
  return (
    <div>
        <Link href={"/"}>Click here</Link>
        <button onClick={handleClick}>Next-Navigation</button>
    </div>
  )
}

export default Navigation
