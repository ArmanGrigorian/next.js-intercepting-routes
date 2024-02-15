import Image from "next/image";
import Link from "next/link";

import { photos } from "@/lib/photos";

function PhotosPage() {
	return (
		<>
			<h1 className="mb-10 font-serif text-4xl font-bold text-neutral-900">Photos</h1>

			<div className="flex flex-wrap justify-evenly items-start gap-5">
				{photos.map(({ id, imageSrc, name }) => (
					<Link key={id} href={`/photos/${id}`}>
						<Image
							src={imageSrc}
							height={400}
							width={400}
							alt={`photo by ${name}`}
							className="shadow-xl w-[256px] aspect-square rounded-xl object-cover"
						/>
					</Link>
				))}
			</div>
		</>
	);
}

export default PhotosPage;
