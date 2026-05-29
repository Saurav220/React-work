# 🎫 New Task

## NC-1002: Build an Interactive Task Counter

| Field              | Value                                                |
| ------------------ | ---------------------------------------------------- |
| **Assigned By**    | Priya Sharma (Senior React Developer)                |
| **Priority**       | Medium                                               |
| **Difficulty**     | ⭐ Level 1 — Beginner (State Management Introduction) |
| **Estimated Time** | 1.5–2.5 Hours                                        |

---

## 📖 Business Context

NovaDash users manage hundreds of workflow tasks every day. During daily standups, team leads often need a quick way to manually track how many tasks have been:

* Triaged
* Completed
* Deferred

The Operations Team has requested a lightweight dashboard widget that acts like a multi-category clicker counter. The widget will be placed in a sidebar and used during meetings to keep a running tally of task activity.

This ticket introduces React state management and user interaction patterns that are commonly used throughout the application.

---

## 🎯 Objective

Create a reusable React component named **`TaskCounter`** that allows users to increment, decrement, reset, and monitor counts across multiple task categories.

---

## 📋 Requirements

### Component

Create a functional React component called **`TaskCounter`**.

### Counters

The component should display the following task categories:

* Triaged
* Completed
* Deferred

Each counter must:

* Display its label.
* Display its current count.
* Start at `0`.
* Include an **Increment (+)** button.
* Include a **Decrement (−)** button.

### Counter Behavior

* Clicking **Increment** increases the count by `1`.
* Clicking **Decrement** decreases the count by `1`.
* Counts must never go below `0`.
* Attempting to decrement at `0` should have no effect.

### Reset Functionality

Add a **Reset All** button that:

* Resets all counters to `0`.
* Updates the UI immediately.

### Total Counter

Display a **Total** section at the bottom of the widget.

The total should:

* Represent the sum of all three counters.
* Update automatically whenever any counter changes.
* Be calculated dynamically rather than stored as separate state.

### Styling

* Present the component as a clean dashboard card/widget.
* Use a dedicated CSS file.
* Do **not** use inline styles.
* Ensure spacing, alignment, and button styling are consistent and readable.

### State Management

* All state must be managed inside the `TaskCounter` component.
* No external state libraries or global state management solutions should be used.

### Code Quality

* Use clear naming conventions.
* Follow React best practices.
* Include **PropTypes** where appropriate or use default parameter destructuring based on previous code review feedback.

---

## ✅ Acceptance Criteria

* [ ] `TaskCounter` is implemented as a reusable functional component.
* [ ] Three counters are rendered with the correct labels.
* [ ] All counters start at `0`.
* [ ] Increment buttons increase counts correctly.
* [ ] Decrement buttons decrease counts correctly.
* [ ] Counts never drop below `0`.
* [ ] "Reset All" resets every counter to `0`.
* [ ] Total updates dynamically whenever any counter changes.
* [ ] Total is derived from existing state and is not stored separately.
* [ ] Component is styled as a dashboard card/widget.
* [ ] All styles are located in a separate CSS file.
* [ ] Component manages its own state internally.
* [ ] Code follows clean naming and React best practices.
* [ ] PropTypes or default parameter destructuring is implemented.

---

## 🧪 Suggested Test Cases

Verify the following scenarios:

### Initial Render

* All counters display `0`.
* Total displays `0`.

### Increment Behavior

* Increment each counter individually.
* Verify counts update correctly.
* Verify Total updates accordingly.

### Decrement Behavior

* Decrement a counter above `0`.
* Verify the count decreases by `1`.
* Verify Total updates correctly.

### Boundary Condition

* Attempt to decrement a counter already at `0`.
* Verify the count remains `0`.
* Verify Total does not change.

### Reset Functionality

* Increment multiple counters.
* Click **Reset All**.
* Verify all counters return to `0`.
* Verify Total returns to `0`.

---

## 🧭 Mentor Notes

### From Priya

> Hey Saurav,
>
> This ticket introduces one of the most important concepts in React: **state management**.
>
> A few things I'd like you to think about:
>
> * You have three related pieces of data. How should you structure that state?
> * Would you use three separate `useState` hooks, a single object, or an array?
> * Every approach has trade-offs. Pick one intentionally and be prepared to explain your reasoning.
>
> Also, pay close attention to the **Total** value.
>
> * It should be a derived value.
> * It should not have its own state.
> * Think about why duplicating state can create bugs and synchronization issues.
>
> And remember the feedback from NC-1001:
>
> * Use explicit, meaningful names.
> * Keep your CSS clean and organized.
> * Include PropTypes where appropriate.
>
> I'm less interested in how many lines of code you write and more interested in whether your solution is easy to understand six months from now.
>
> Good luck. Looking forward to your implementation. 🚀

---

## 📈 Developer Progress Dashboard

| Metric           | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| Current Level    | Level 1 — Beginner Developer                                                     |
| Overall Rating   | 7.5 / 10                                                                         |
| Tasks Completed  | 1                                                                                |
| Skills Unlocked  | Components, Props, CSS/BEM, Conditional Rendering, Object Lookup, List Rendering |
| Next Skill Focus | useState, Derived State, Event Handling                                          |
| Next Milestone   | Complete 3 tasks → Sprint 1 Review with Arjun                                    |

---

## 💡 Learning Goals

By completing this task, you should gain practical experience with:

* React `useState`
* Event handling
* State updates
* Preventing invalid state transitions
* Derived state calculations
* Component organization
* Reusable UI patterns
* Clean React coding practices

Deliver a solution that is simple, predictable, and easy for another engineer to understand and maintain.
