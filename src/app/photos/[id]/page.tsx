import PhotoCard from "@/components/PhotoCard";
import { photos } from "@/lib/photos";
import { T_photo } from "@/types";
import Link from "next/link";

function PhotoPage({ params: { id } }: { params: { id: string } }) {
	const photo: T_photo = photos.find((p) => p.id === id)!;

	return (
		<main className="p-10 max-w-7xl mx-auto">
			<Link
				href="/photos"
				className="mb-10 block w-fit h-fit border shadow-xl px-4 py-2 rounded-md hover:bg-neutral-900 hover:text-neutral-100 hover:font-medium active:scale-95">
				Back to photos
			</Link>

			<PhotoCard photo={photo} />
		</main>
	);
}

export default PhotoPage;
