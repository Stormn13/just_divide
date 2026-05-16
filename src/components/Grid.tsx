import Cell from "./Cell"

type GridProps = {
	grid: (number | null)[][]
}

export default function Grid({ grid }: GridProps) {
	return (
		<div className="grid">
			{grid.flat().map((value, index) => (
				<Cell
					key={index}
					value={value}
				/>
			))}
		</div>
	)
}