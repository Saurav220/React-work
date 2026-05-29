NC-1002: Build an Interactive Task Counter
Assigned by: Priya Sharma (Senior React Developer) Priority: Medium Difficulty: ⭐ Level 1 — Beginner (introduces state) Estimated Time: 1.5–2.5 hours

📖 Business Context
NovaDash users manage hundreds of workflow tasks daily. The operations team has asked for a simple task counter widget that can sit in a dashboard sidebar. Team leads use it during daily standups to manually track how many tasks were triaged, completed, and deferred during the meeting. Think of it as a lightweight clicker counter — but with multiple categories.

📋 Requirements
Create a component called TaskCounter that displays three named counters: Triaged, Completed, and Deferred.
Each counter should:
Display its name and current count (starting at 0).
Have an Increment (+) button.
Have a Decrement (−) button.
Never go below zero — decrement should stop at 0.
Add a "Reset All" button that sets all three counters back to 0.
Display a Total at the bottom that shows the sum of all three counters — this should update automatically.
Style it as a clean card/widget. Use a separate CSS file.
The component should be self-contained — all state lives inside TaskCounter.
✅ Acceptance Criteria
Three counters rendered with correct labels.
Increment and decrement buttons work correctly.
Count never goes below zero.
"Reset All" resets all counters to 0.
Total updates dynamically as any counter changes.
Styled as a card widget with a separate CSS file.
Component is self-contained (no external state management).
PropTypes or default parameter destructuring is used (carry forward from NC-1001 feedback).
🧭 Mentor Notes
From Priya:

"This one is about useState. A few things to think about:

You have three pieces of state that are related. How will you structure them? Three separate useState calls? One object? One array? Each has trade-offs — pick one and be ready to justify it.
The 'Total' is a derived value — it shouldn't be its own state. Think about why.
Remember the feedback from NC-1001: explicit naming, PropTypes, clean CSS.
Show me what you've got." 💬

📈 Developer Progress Dashboard
Metric Value
Current Level Level 1 — Beginner Developer
Overall Rating 7.5 / 10
Tasks Completed 1
Skills Unlocked Components, Props, CSS/BEM, Conditional Rendering, Object Lookup, List Rendering
Next Skill useState, Derived State, Event Handling
Next Milestone Complete 3 tasks → Sprint 1 review with Arjun
