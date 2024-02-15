"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className="max-w-7xl mx-auto px-10 h-16 flex justify-center items-center gap-20 bg-neutral-900 text-white font-medium">
			<Link
				href="/"
				className={`${pathname === "/" ? "opacity-100" : "opacity-90"} hover:opacity-100`}>
				Home
			</Link>
			<Link
				href="/photos"
				className={`${pathname === "/photos" ? "opacity-100" : "opacity-90"} hover:opacity-100`}>
				Photos
			</Link>
		</nav>
	);
};

export default Navbar;
