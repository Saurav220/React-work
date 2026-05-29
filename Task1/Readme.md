🎫 New Task
NC-1001: Build a Reusable Status Badge Component
Assigned by: Priya Sharma (Senior React Developer) Priority: Low Difficulty: ⭐ Level 1 — Beginner Estimated Time: 1–2 hours

📖 Business Context
In NovaDash, every workflow task has a status — things like Pending, In Progress, Completed, Failed, On Hold. Right now, we show these as plain text everywhere. The product team wants us to replace plain text statuses with styled badge components so users can quickly scan task lists and identify statuses visually.

This badge will be used across at least 4 different pages, so it must be reusable.

📋 Requirements
Create a functional React component called StatusBadge.
It should accept a status prop (string) with these possible values:
"pending" → Yellow/amber background
"in-progress" → Blue background
"completed" → Green background
"failed" → Red background
"on-hold" → Gray background
The badge should display the status text in a formatted, human-readable way (e.g., "in-progress" → "In Progress").
The component should render as a small, rounded pill/chip (inline element).
Style it using plain CSS (a separate .css file). No inline styles.
If an unknown status is passed, it should render a neutral/default badge (don't crash).
Create a small demo page (App.jsx or similar) that renders all 5 status badges so we can visually verify them.
✅ Acceptance Criteria
StatusBadge is a functional component in its own file.
Accepts a status prop and renders the correct color + label.
Each status has a visually distinct color.
Unknown statuses render gracefully (no crash, shows a default style).
Styles are in a separate CSS file, not inline.
A demo page renders all badges for visual verification.
Code is clean, readable, and follows good naming conventions.
🧭 Mentor Notes
From Priya:

"Hey Saurav, a few pointers for your first ticket:

Think about how you'll map statuses to colors. There are several patterns — pick one and be ready to explain why.
Think about what happens if someone passes status="banana". Your component shouldn't blow up.
Don't over-engineer it. It's a badge. But do make it clean — I'll be reviewing your code as if it's going to production.
Naming matters. File names, class names, variable names — treat them like they'll be read by 10 other engineers.
Good luck. Ping me if you're stuck, but try to figure it out first." 💬

📈 Developer Progress Dashboard
Metric Value
Current Level Level 1 — Beginner Developer
Overall Rating Not yet evaluated
Tasks Completed 0 / 1 assigned
Skills Unlocked None yet
Next Milestone Complete first task → unlock Level 1 skill badges
