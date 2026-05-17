# JUST DIVIDE

A drag-and-drop puzzle game built with React, TypeScript, and dnd-kit.

Live Demo: https://just-divide-dm3y.vercel.app/

---

# Overview

JUST DIVIDE is a grid-based educational puzzle game inspired by arithmetic reduction mechanics.

Players drag numbered tiles from a queue onto a 4x4 board. When tiles touch neighboring tiles, they may disappear or divide according to mathematical rules.

The game combines:

* spatial puzzle solving
* queue management
* factor/division logic
* strategic placement
* inventory management

The project is currently in active development.

---

# Current Features

## Core Architecture

Implemented:

* React + TypeScript project structure
* Centralized game state in `App.tsx`
* Prop-driven component architecture
* Modular component system
* Separated gameplay utility functions
* Reusable game logic modules

---

# Board System

Implemented:

* 4x4 game board
* Dynamic board rendering
* Individual droppable cells using dnd-kit
* Empty/filled cell handling
* Placement restrictions for occupied cells

---

# Drag and Drop

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
* Overlay rendering during drag
* Drag state management

---

# Queue System

Implemented:

* Upcoming tile queue
* First tile draggable
* Queue advancement
* Dynamic random tile generation
* Queue swapping through KEEP slot

Current queue behavior:

* placing tile advances queue
* trashing tile advances queue
* keeping tile stores tile
* swapping retrieves stored tile

---

# Merge / Division System

Implemented:

* Neighbor checking
* Equality removal logic
* Division merge logic
* Quotient replacement logic
* Result-of-1 removal logic

Current rules:

### Equal tiles disappear

```txt
4 next to 4
→ both removed
```

### Divisible tiles merge

```txt
12 next to 3
→ 4
```

```txt
15 next to 5
→ 3
```

```txt
9 next to 3
→ 3
```

### Result of 1 disappears

```txt
2 next to 2
→ 1
→ removed
```

---

# Keep Slot

Implemented:

* tile storage
* keep slot swapping
* retrieval logic

---

# Trash Slot

Implemented:

* tile deletion
* queue advancement after deletion

---

# Tile Generation

Implemented:

* centralized tile generation function
* random tile spawning
* reusable generation architecture

Current tile pool:

* 2
* 4
* 8

Architecture supports future:

* weighted randomness
* difficulty scaling
* rare tiles

---

# Tile Rendering

Implemented:

* dynamic tile sprites
* value-based tile visuals
* overlay drag rendering
* scalable tile component
* reusable tile architecture

---

# UI

Implemented:

* arcade-inspired puzzle layout
* responsive board structure
* custom tile visuals
* right-side utility panel
* drag overlay visuals
* scalable tile rendering

Still being refined:

* queue alignment cleanup
* responsive scaling polish
* animation polish
* final spacing consistency

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
│   ├── type.ts
│   ├── generateTile.ts
│   └── resolveNeighbors.ts
│
├── assets/
│   └── tile sprites
│
├── App.tsx
└── main.tsx
```

---

# Current Development Progress

# COMPLETED

## Core Systems

* [x] React architecture
* [x] Game state ownership
* [x] DnD system
* [x] Queue logic
* [x] Keep logic
* [x] Trash logic
* [x] Board placement
* [x] Drag overlays
* [x] Tile rendering
* [x] Dynamic tile generation
* [x] Neighbor merge resolution
* [x] Division logic
* [x] Equality removal logic

---

## UI Foundation

* [x] Main board layout
* [x] Right utility panel
* [x] Tile assets
* [x] Cell visuals
* [x] Background implementation
* [x] Responsive layout foundation

---

# IN PROGRESS

## UI Polish

* [ ] queue alignment cleanup
* [ ] spacing consistency
* [ ] responsive fine-tuning
* [ ] animation polish

---

# TODO

## Gameplay Systems

### Score System

Planned:

* score tracking
* combo scoring
* multiplier logic
* merge rewards

---

### Timer / Phase System

Planned:

* round timer
* game phases
* lose conditions

---

### Tile Generation Improvements

Planned:

* weighted probabilities
* level scaling
* difficulty progression

---

### Advanced Merge Logic

Planned:

* chain reactions
* merge prioritization
* recursive resolution

---

### Game States

Planned:

* game over detection
* restart logic
* pause system
* win conditions

---

### Undo / Hint System

Planned:

* undo stack
* hint highlighting
* valid move visualization

---

### Audio / Feedback

Planned:

* sound effects
* merge feedback
* drag feedback
* particle effects
* transitions

---

# Technical Notes

The project uses:

* React functional components
* hooks-based state management
* centralized game loop architecture
* prop-driven rendering
* modular gameplay logic
* dnd-kit for interactions

The architecture is designed so future gameplay systems can be added without major rewrites.

---

# Main Challenge So Far

The biggest development challenge has been integrating:

* drag-and-drop overlays
* queue rendering
* responsive layout behavior
* merge simulation
* gameplay state flow

while keeping the UI visually stable and the logic modular.

---

# Current State of the Project

The project has now moved beyond a UI prototype and into a functional gameplay prototype.

Core interaction systems and primary merge mechanics are operational.

The remaining work is primarily:

* polish
* balancing
* progression systems
* feedback systems
* UX refinement

---

# Next Major Milestone

The next major step is implementing:

* scoring
* chain reactions
* game-over detection
* undo/hint systems
* animations and polish

This will transition the project from:

* functional prototype
  to
* complete playable experience.

---

# Author

Akshat Sharma

Built as a learning/project-based exploration of:

* React
* TypeScript
* game architecture
* drag-and-drop systems
* puzzle game design
* educational game mechanics
