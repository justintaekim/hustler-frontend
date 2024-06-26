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
        width={50}
        quality={100}
        // placeholder="blur"
      />
      <Link href="/">
        <h1>Hustler</h1>
      </Link>
      <Link href="/">Hustle Hustle!</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
