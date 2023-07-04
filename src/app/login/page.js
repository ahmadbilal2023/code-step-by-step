"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  const navigation = (page) => {
    router.push("/login"+page)
  };
  return (
    <>
      <div>Login Page</div>
      <Link href={"/"}>Go to Home Page</Link>
      <br /> <br />
      <button onClick={() => navigation("/loginstudent")}>
        Go to student login
      </button>
      <br /> <br />
      <button onClick={() => navigation("/loginteacher")}>
        Go to teacher login
      </button>
    </>
  );
};

export default Login;
