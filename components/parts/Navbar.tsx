// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { AppProps } from "next/app";
import $ from "jquery";

import { useRef, useEffect, useState } from "react";

// CSS imports
import styles from "../../styles/parts/Navbar.module.css";

// Interface to define props
interface Props {}

// Page
export default function Navbar({}: Props) {
	const logoRef = useRef<HTMLImageElement>(null);
	const navbarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (navbarRef.current !== null) {
				document.body.getBoundingClientRect().top <= -1
					? navbarRef.current.classList.add(`${styles.scrolledNav}`)
					: navbarRef.current.classList.remove(`${styles.scrolledNav}`);
			}
		});
	}, []);

	return (
		<nav>
			<div className={`${styles.NavWrapper}`} ref={navbarRef}>
				<ul className="d-flex flex-row justify-content-around align-items-center">
					<li className="col-2" id={`${styles.NavTitle}`}>
						<Link
							href="/"
							className="d-flex flex-row justify-content-center align-items-center"
						>
							<Image
								src={"/img/lymannhsborder.png"}
								width={50}
								height={50}
								alt="Logo"
								id={styles.NavLogo}
								ref={logoRef}
								className="pe-2 hoverUnderlineAnim"
							/>
							<p className={`hoverUnderlineAnim`}>NHS</p>
						</Link>
					</li>
					<li className="col-6">
						<div className="d-flex flex-row justify-content-around align-items-center">
							<Link href="/about" className="hoverUnderlineAnim">
								About
							</Link>
							<Link href="/admin" className="hoverUnderlineAnim">
								Admin
							</Link>
						</div>
					</li>
					<li className="col-4 d-flex align-items-center justify-content-evenly px-5">
						<Link href="/createaccount" className="hoverUnderlineAnim">
							Create Account
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
