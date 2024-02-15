import Modal from "@/components/Modal";
import PhotoCard from "@/components/PhotoCard";
import { photos } from "@/lib/photos";
import { T_photo } from "@/types";

export default function PhotoModal({ params: { id } }: { params: { id: string } }) {
	const photo: T_photo = photos.find((p) => p.id === id)!;

	return (
		<Modal>
			<PhotoCard photo={photo} />
		</Modal>
	);
}
