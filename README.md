# JUST DIVIDE

A drag-and-drop puzzle game built with React, TypeScript, and dnd-kit.

Live Demo: https://just-divide-dm3y.vercel.app/

---

# Overview

JUST DIVIDE is a grid-based puzzle game where the player drags numbered tiles from a queue onto a 4x4 board.

The game combines:

* spatial puzzle solving
* queue management
* merge/division mechanics
* limited inventory control

The project is currently in active development.

---

# Current Features

## Core Architecture

* React + TypeScript project structure
* Centralized game state in `App.tsx`
* Prop-driven component architecture
* Modular component system

---

## Board System

* 4x4 game board
* Dynamic board rendering
* Individual droppable cells using dnd-kit
* Empty/filled cell handling

---

## Drag and Drop

Implemented using:

* `DndContext`
* `useDraggable`
* `useDroppable`
* `DragOverlay`

Current functionality:

* Drag queue tiles
* Drop onto board
* Drop into keep slot
* Drop into trash slot

---

## Queue System

Implemented:

* 2-tile queue
* First tile draggable
* Queue advancement
* Dynamic tile generation

Current queue behavior:

* placing tile advances queue
* trashing tile advances queue
* keeping tile stores tile

---

## Keep Slot

Implemented:

* tile storage
* keep slot swapping
* retrieval logic

---

## Trash Slot

Implemented:

* tile deletion
* queue advancement after deletion

---

## Tile Rendering

Implemented:

* dynamic tile sprites
* value-based tile visuals
* overlay drag rendering
* scalable tile component

Current tile types:

* 2
* 4
* 8
* higher fallback tile

---

## UI

Implemented:

* arcade-inspired puzzle layout
* responsive board structure
* custom tile visuals
* right-side utility panel

Still being refined:

* queue positioning
* spacing consistency
* visual polish

---

# Project Structure

```txt
src/
│
├── components/
│   ├── Grid.tsx
│   ├── Cell.tsx
│   ├── Queue.tsx
│   ├── Tile.tsx
│   ├── RightSlot.tsx
│   ├── KeepSlot.tsx
│   └── TrashSlot.tsx
│
├── game/
│   └── type.ts
│
├── assets/
│   └── tile sprites
│
├── App.tsx
└── main.tsx
```

---

# Current Development Progress

## COMPLETED

### Core Systems

* [x] React architecture
* [x] Game state ownership
* [x] DnD system
* [x] Queue logic
* [x] Keep logic
* [x] Trash logic
* [x] Board placement
* [x] Drag overlays
* [x] Tile rendering

### UI Foundation

* [x] Main board layout
* [x] Right utility panel
* [x] Tile assets
* [x] Cell visuals

---

# IN PROGRESS

## UI Polish

* [ ] queue alignment cleanup
* [ ] final spacing adjustments
* [ ] responsive scaling
* [ ] animation polish

---

# TODO

## Gameplay Logic

### Merge System

Planned:

* adjacent tile checking
* division rules
* merge resolution
* chain reactions

---

### Score System

Planned:

* score tracking
* combo scoring
* multiplier logic

---

### Timer / Phase System

Planned:

* round timer
* game phases
* lose conditions

---

### Tile Generation

Planned:

* weighted randomness
* difficulty scaling
* progression balancing

---

### Game States

Planned:

* win state
* lose state
* restart logic
* pause system

---

### Audio / Feedback

Planned:

* sound effects
* merge feedback
* drag feedback
* animations

---

# Technical Notes

The project uses:

* React functional components
* hooks-based state management
* centralized game loop architecture
* prop-driven rendering
* dnd-kit for interactions

The current architecture is designed so future gameplay systems can be added without major rewrites.

---

# Main Challenge So Far

The biggest development challenge has been integrating:

* drag-and-drop overlays
* queue rendering
* responsive layout behavior

while keeping the UI visually stable.

Most core gameplay architecture is now functioning correctly.

---

# Next Major Milestone

The next major step is implementing:

* merge logic
* division mechanics
* row/column solving rules

This will transition the project from:

* UI prototype
  to
* actual playable game.

---

# Author

Akshat Sharma

Built as a learning/project-based exploration of:

* React
* TypeScript
* game architecture
* drag-and-drop systems
* puzzle game design
