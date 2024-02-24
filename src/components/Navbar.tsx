"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/hilink-logo.svg";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		const nav = document.getElementById("nav");

		const handleResize = () => {
			if (window.matchMedia("(min-width: 1024px)").matches) {
				nav?.classList.remove("showMenu");
				setShowMenu(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<nav className="flexBetween max-container padding-container relative z-30 py-5">
			<Link href={"/"}>
				<Image src={Logo} alt="logo" width={74} height={29} />
			</Link>

			<ul
				id="nav"
				className={`hidden h-0 max-h-screen gap-12 lg:flex lg:h-full transition-all duration-500 ease-in-out ${
					showMenu && "showMenu"
				}`}
			>
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className="text-gray-500 cursor-pointer pb-1.5 transition-all hover:font-bold"
					>
						{link.label}
					</Link>
				))}
			</ul>

			<div className="hidden lg:flexCenter">
				<Button title="Login" type="button" icon="/user.svg" />
			</div>

			<button onClick={() => setShowMenu(!showMenu)} className="z-50 lg:hidden">
				<Image
					src="menu.svg"
					alt="menu"
					width={32}
					height={32}
					className="inline-block cursor-pointer lg:hidden"
				/>
			</button>
		</nav>
	);
};

export default Navbar;
