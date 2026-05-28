# Constitution

> Authored by the Project Manager. Immutable for the rest of the workflow; remediation triage may append a `Constitution Amendment` section but cannot rewrite this file.

## Vision

Build a minimal, self-contained single-page todo application using vanilla technologies that users can open directly in a browser.

## Goals

- Enable users to add new todo items
- Allow users to mark todos as complete/incomplete
- Provide a delete function to remove todos
- Include a README with local execution instructions

## Constraints

- Single page design without routing
- Vanilla JavaScript only - no frameworks or libraries
- HTML, CSS, and JavaScript files at repository root
- Must pass npm install, lint, and basic validation

## Audience

web developers and non-technical users who want a simple todo app

## Output Medium

HTML, CSS, and JavaScript files with README.md

## Acceptance Criteria

- The app can be opened in a modern browser and render without errors
- Users can add new todo items through the UI
- Users can toggle todos between complete and incomplete states
- Users can delete todo items from the list
- The README explains how to open the app locally
- No cross-artifact references or meta-scaffolding markers in final output

## Out of Scope

- backend persistence or database integration
- React/Vue/Angular or other framework integration
- authentication or user accounts
- push notifications or real-time sync

## Functional Requirements

| ID | Priority | Title | Description | Source |
|---|---|---|---|---|
| F1 | must | Add Todo Item | A form or input field allows users to enter text and add a new todo to the list | constituent |
| F2 | must | Toggle Completion State | Each todo item displays a checkbox or toggle that marks the item as complete when clicked | constituent |
| F3 | must | Delete Todo Item | Each todo item has a delete button that removes it from the list | constituent |
| F4 | could | Empty List Handling | When no todos remain, display a friendly message instead of an empty list | constituent |

## Non-Functional Requirements

| ID | Priority | Title | Description | Source |
|---|---|---|---|---|
| NF1 | must | Browser Compatibility | The app must render and function in modern browsers (Chrome, Firefox, Safari, Edge) | constituent |
| NF2 | must | Code Quality | HTML, CSS, and JavaScript code must be properly formatted and pass ESLint | constituent |
| NF3 | should | Responsive Design | The UI adapts reasonably to different screen sizes | constituent |

## Dependencies

- vanilla-extract for CSS if desired, otherwise plain CSS
- no external JavaScript libraries required

