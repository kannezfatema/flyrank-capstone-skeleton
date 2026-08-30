# Accessibility Component Comparison Notes

## Overview

I built three interactive components from scratch in React and TypeScript:

- Modal dialog
- Tabs
- Disclosure

After that, I installed shadcn/ui and inspected its Dialog and Tabs source code to compare the generated components with my own implementations.

## Dialog Comparison

### 1. shadcn provides a structured component system

My modal was implemented as one custom component with manual state and focus-management logic. The shadcn Dialog is split into reusable parts such as:

- Dialog
- DialogTrigger
- DialogContent
- DialogOverlay
- DialogClose
- DialogTitle
- DialogDescription

This structure makes the component easier to compose and reuse in different parts of an application.

### 2. shadcn handles more dialog infrastructure

My implementation manually handled opening, closing, Escape, focus trapping, and returning focus to the trigger button. The shadcn Dialog delegates the underlying accessibility behavior to Base UI primitives, including the dialog root, trigger, portal, backdrop, popup, close controls, title, and description.

I also noticed that the shadcn implementation uses a Portal, which keeps the dialog outside the normal page layout and avoids common stacking and overflow problems.

### 3. shadcn includes an accessible close control

The generated DialogContent includes a close button with a visually hidden label:

`<span className="sr-only">Close</span>`

My custom modal used visible action buttons, but I did not create a reusable icon-only close button with a screen-reader label.

## Tabs Comparison

### 1. shadcn supports a more reusable tabs API

My Tabs component used a single array of tab data and manually created buttons and panels. shadcn separates the component into:

- Tabs
- TabsList
- TabsTrigger
- TabsContent

This allows developers to compose different tab layouts without changing the component's internal source.

### 2. shadcn supports orientation and variants

My implementation only supported a horizontal tab list. The shadcn Tabs component accepts an orientation property and its styling supports both horizontal and vertical layouts.

The generated TabsList also supports visual variants such as the default style and a line style. My version did not provide a reusable styling API.

### 3. shadcn provides stronger focus-visible styling

My handmade tabs correctly supported keyboard navigation with ArrowLeft, ArrowRight, Home, and End. However, the shadcn source includes dedicated `focus-visible` styles, making keyboard focus more obvious to users.

## What I Learned

Building the components manually helped me understand the accessibility requirements behind interactive UI components. The shadcn source showed me that a production-ready component system needs more than visible UI and basic keyboard behavior.

The biggest gaps I found between my implementation and shadcn/ui were:

1. My components were less reusable and composable.
2. My modal required manual focus-management logic, while shadcn uses accessible primitives for more robust dialog behavior.
3. My tabs only supported one layout, while shadcn supports reusable orientation and styling variants.
4. shadcn includes additional accessible details such as structured dialog primitives, portals, close controls, screen-reader text, and focus-visible styles.

I would still keep manual accessibility testing because using a component library does not remove the need to verify keyboard behavior, focus order, labels, and the accessibility of the surrounding application.