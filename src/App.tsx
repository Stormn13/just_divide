import { useState } from "react";
import { generateTile } from "./game/generateTile";
import { resolveNeighbors } from "./game/resolveNeighbors";
import {
	DndContext,
	DragOverlay,
	pointerWithin,
	type DragStartEvent,
	type DragEndEvent
} from "@dnd-kit/core";

import Grid from "./components/Grid";
import RightSlot from "./components/RightSlot";
import Tile from "./components/Tile";

import type { TileData } from "./game/type";

export default function App(){

	const initialGrid: TileData[] = Array.from(
		{ length: 16 },
		(_, index) => ({
			id: `cell-${index}`,
			value: 0
		})
	);
	const initialQueue: [TileData, TileData] = [
		generateTile(),
		generateTile()
	];
	const initialKeep: TileData = {
		id: "keep",
		value: 0
	};

	const [grid, setGrid] = useState(initialGrid);
	const [queue, setQueue] = useState(initialQueue);
	const [keep, setKeep] = useState(initialKeep);
	const [activeId, setActiveId] = useState<string | null>(null);

	function handleDragStart(event: DragStartEvent){
		setActiveId(event.active.id.toString());
	}

function handleDragEnd(event: DragEndEvent){

	setActiveId(null);

	const targetId = event.over?.id;

	if(!targetId){
		return;
	}

	const activeTile = queue[0];

	if(targetId === "keep-slot"){

		/* empty keep */

		if(keep.value === 0){

			setKeep(activeTile);

			setQueue([
				queue[1],
				generateTile()
			]);

			return;
		}

		setKeep(activeTile);

		setQueue([
			keep,
			queue[1]
		]);

		return;
	}

	if(targetId === "trash-slot"){

		setQueue([
			queue[1],
			generateTile()
		]);

		return;
	}

	const targetIndex = grid.findIndex(
		(cell) => cell.id === targetId
	);

	if(targetIndex === -1){
		return;
	}


	if(grid[targetIndex].value !== 0){
		return;
	}

	const newGrid = [...grid];

	newGrid[targetIndex] = activeTile;

	const resolvedGrid = resolveNeighbors(
		newGrid,
		targetIndex
	);

	setGrid(resolvedGrid);

	setQueue([
		queue[1],
		generateTile()
	]);
}

	return (
		<div className="app">

			<h1 className="heading">
				JUST DIVIDE
			</h1>

			<span className="timer">
				0:07
			</span>

			<span className="heading">
				Divide the numbers to solve rows and columns
			</span>

			<DndContext
				collisionDetection={pointerWithin}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
			>

				<div className="game_area">

					<Grid grid={grid} />

					<RightSlot
						queue={queue}
						keep={keep}
						activeId={activeId}
					/>

				</div>

				<DragOverlay>

					{
						activeId &&
						<Tile value={queue[0].value}/>
					}

				</DragOverlay>

			</DndContext>

		</div>
	)
}
