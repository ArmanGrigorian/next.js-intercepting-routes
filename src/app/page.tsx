import Link from "next/link";

function HomePage() {
	return (
		<main className="p-10 max-w-7xl mx-auto">
			<h1 className="mb-10 font-serif text-4xl font-bold text-neutral-900">Intercepting Routes</h1>

			<Link
				href="/photos"
				className="block w-fit h-fit border shadow-xl px-4 py-2 rounded-md hover:bg-neutral-900 hover:text-neutral-100 hover:font-medium active:scale-95">
				Go to photos
			</Link>
		</main>
	);
}

export default HomePage;
