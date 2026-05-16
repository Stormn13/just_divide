import { useDroppable } from "@dnd-kit/core";

export default function TrashSlot(){

	const { setNodeRef } = useDroppable({
		id: "trash-slot"
	});

	return(
		<div
			ref={setNodeRef}
			className="trash-slot"
		>
			
		</div>
	)
}