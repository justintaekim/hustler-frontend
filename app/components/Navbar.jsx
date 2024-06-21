import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./hustler.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Logo image"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>I love you</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
