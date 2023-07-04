"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  const route = useRouter();
  const navigate = (name)=>{
    route.push(name)
  }
  return (
    <main>
     <h1>Basic Routing</h1>
     <Link href={"/login"}>go to login page</Link>
     <br/>
     <br/>
     <Link href={"/about"}>go to aboutus page</Link>
     <br/>
     <br/>
     <button onClick={()=>(navigate("/login"))}>Go to Login page</button>
     <br/>
     <button onClick={()=>(navigate("/about"))}>Go to About page</button>
    </main>
  )
}

