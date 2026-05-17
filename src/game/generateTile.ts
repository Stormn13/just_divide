import type { TileData } from "./type";

const possibleValues = [2,4,8,16,32];

export function generateTile(): TileData{
    const randomIndex = Math.floor(
        Math.random() * possibleValues.length
    );
    const randomValue = possibleValues[randomIndex];
    return {
        id: crypto.randomUUID(),
        value: randomValue
    };
}