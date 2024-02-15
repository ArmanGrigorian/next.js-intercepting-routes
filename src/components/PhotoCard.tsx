import { T_photo } from "@/types";
import Image from "next/image";

export default function PhotoCard({ photo }: { photo: T_photo }) {
	return (
		<div className="w-[256px] bg-neutral-100 shadow-2xl rounded-lg max-md:w-full">
			<Image
				src={photo.imageSrc}
				height={500}
				width={500}
				alt={photo.name}
				className="block aspect-square w-full object-cover rounded-t-lg"
			/>

			<div className="p-4">
				<h3 className="font-serif text-xl font-medium max-md:text-md">{photo.name}</h3>
				<p className="text-sm text-gray-500">Taken by {photo.username}</p>
			</div>
		</div>
	);
}
