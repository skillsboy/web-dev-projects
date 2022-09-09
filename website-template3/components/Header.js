import { useEffect, useRef, useState } from "react";

export default function Header({ heroIntersection }) {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const closeBtn = useRef("closeBtn");
	const outerMenu = useRef("outerMenu");

	function handleCloseNav(e) {
		if (e.target === closeBtn.current || e.target === outerMenu.current) {
			e.preventDefault();
			e.stopPropagation();

			setIsNavOpen(false);
		}
	}

	function handleOpenNav(e) {
		e.preventDefault();
		setIsNavOpen(true);
	}

	// disable body scroll when navigation is open
	useEffect(() => {
		if (isNavOpen) document.body.classList.add("overflow-hidden");
		else document.body.classList.remove("overflow-hidden");
	}, [isNavOpen]);

	return (
		<header
			className={`${
				heroIntersection ? "" : "bg-[#353849f2]"
			} flex justify-between fixed w-full z-50`}
		>
			{/* Site name */}
			<div
				className={`${
					heroIntersection ? "invisible" : ""
				} self-center ml-6`}
			>
				{" "}
				SITE NAME
			</div>

			<nav>
				{/* Open nav btn */}
				<a
					href="#"
					className="block p-2.5 hover:text-indigo-600"
					onClick={handleOpenNav}
				>
					<span className="mr-2 hidden sm:inline-block">MENU</span>
					<span>☰</span>
				</a>

				{/* Nav */}
				<div
					className={`${
						!isNavOpen ? "hidden" : ""
					} fixed inset-0 flex flex-col items-center justify-center backdrop-blur-[1.5px]`}
					onClick={handleCloseNav}
					ref={outerMenu}
				>
					{/* Nav wrapper */}
					<div className="bg-[#4c5c96] rounded py-10 px-5 relative w-72 max-w-full-">
						{/* Close nav btn */}
						<a
							className="absolute top-0 right-0 py-2 px-4 hover:text-indigo-600"
							href="#"
							ref={closeBtn}
						>
							✘
						</a>
						{/* List */}
						<ul className="text-sm text-center font-extralight">
							<li>
								<h3 className="py-3 border-b-2 border-white/20 mb-4">
									MENU
								</h3>
							</li>
							<li>
								<a
									className="block py-3 hover:bg-indigo-500/30 rounded"
									href="#"
								>
									HOME
								</a>
							</li>
							<li>
								<a
									className="block py-3 hover:bg-indigo-500/30 rounded"
									href="#"
								>
									PAGE 1
								</a>
							</li>
							<li>
								<a
									className="block py-3 hover:bg-indigo-500/30 rounded"
									href="#"
								>
									PAGE 2
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
