import type { TileData } from "./type";

export function resolveNeighbors(
	grid: TileData[],
	placedIndex: number
): TileData[] {

	const newGrid = [...grid];

	const currentTile = newGrid[placedIndex];

	if(currentTile.value === 0){
		return newGrid;
	}

	/* =========================
	   NEIGHBOR POSITIONS
	========================= */

	const neighbors: number[] = [];

	const row = Math.floor(placedIndex / 4);
	const col = placedIndex % 4;

	/* up */
	if(row > 0){
		neighbors.push(placedIndex - 4);
	}

	/* down */
	if(row < 3){
		neighbors.push(placedIndex + 4);
	}

	/* left */
	if(col > 0){
		neighbors.push(placedIndex - 1);
	}

	/* right */
	if(col < 3){
		neighbors.push(placedIndex + 1);
	}

	/* =========================
	   CHECK NEIGHBORS
	========================= */

	for(const neighborIndex of neighbors){

		const neighborTile = newGrid[neighborIndex];

		if(neighborTile.value === 0){
			continue;
		}

		/* =========================
		   EQUAL TILES
		========================= */

		if(currentTile.value === neighborTile.value){

			newGrid[placedIndex] = {
				...currentTile,
				value: 0
			};

			newGrid[neighborIndex] = {
				...neighborTile,
				value: 0
			};

			return newGrid;
		}

		/* =========================
		   DIVISION MERGE
		========================= */

		const larger = Math.max(
			currentTile.value,
			neighborTile.value
		);

		const smaller = Math.min(
			currentTile.value,
			neighborTile.value
		);

		if(larger % smaller === 0){

			const quotient = larger / smaller;

			/* result becomes 1 */

			if(quotient === 1){

				newGrid[placedIndex] = {
					...currentTile,
					value: 0
				};

				newGrid[neighborIndex] = {
					...neighborTile,
					value: 0
				};

				return newGrid;
			}

			/* larger tile becomes quotient */

			if(currentTile.value === larger){

				newGrid[placedIndex] = {
					...currentTile,
					value: quotient
				};

				newGrid[neighborIndex] = {
					...neighborTile,
					value: 0
				};

			}
			else{

				newGrid[neighborIndex] = {
					...neighborTile,
					value: quotient
				};

				newGrid[placedIndex] = {
					...currentTile,
					value: 0
				};

			}

			return newGrid;
		}
	}

	return newGrid;
}