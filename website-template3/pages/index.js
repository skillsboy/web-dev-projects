import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";

export default function Home() {
	const [heroIntersection, setHeroIntersection] = useState(undefined);

	return (
		<>
			<Header heroIntersection={heroIntersection} />
			<Hero setHeroIntersection={setHeroIntersection} />
			<Main />
			<Footer />
		</>
	);
}
