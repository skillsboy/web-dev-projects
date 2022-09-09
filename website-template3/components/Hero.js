import { useEffect, useRef } from "react";

export default function Hero({ setHeroIntersection }) {
	const heroSection = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(function (entries, observer) {
			const isIntersecting = entries[0].isIntersecting;

			if (isIntersecting) {
				setHeroIntersection(true);
			} else {
				setHeroIntersection(false);
			}
		});

		observer.observe(heroSection.current);
	}, [setHeroIntersection]);

	return (
		<section
			id="hero-section"
			className="bg-[#2e3141]"
			ref={heroSection}
		>
			<div className="pt-20 pb-24 px-10 lg:w-[981px] lg:mx-auto">
				<div className="w-16 mb-3">
					<img className="w-full" src="logo.png" alt="" />
				</div>
				<h1 className="border-b-2 border-white/20 pb-3 mb-4">
					Lorem ipsum dolor sit
				</h1>
				<p className="text-sm font-extralight leading-6 uppercase tracking-widest">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Dolorem?
				</p>
			</div>

		</section>
	);
}
