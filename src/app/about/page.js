import Link from "next/link";
import React from "react";
const About = () => {
  return (
    <div>
      <h1>about me</h1>
      <Link href={"/"}>Go to Home Page</Link>
      <br />
      <br />
      <Link href={"/about/aboutstudent"}>Go to page of AboutSudent</Link>
      <br />
      <br />
      <Link href={"/about/aboutcollege"}>Go to page of AboutCollege</Link>
    </div>
  );
};

export default About;
