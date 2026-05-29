# 🎫 New Task

## NC-1001: Build a Reusable Status Badge Component

| Field              | Value                                 |
| ------------------ | ------------------------------------- |
| **Assigned By**    | Priya Sharma (Senior React Developer) |
| **Priority**       | Low                                   |
| **Difficulty**     | ⭐ Level 1 — Beginner                  |
| **Estimated Time** | 1–2 Hours                             |

---

## 📖 Business Context

NovaDash displays the status of workflow tasks throughout the application. Common statuses include:

* Pending
* In Progress
* Completed
* Failed
* On Hold

Currently, these statuses are displayed as plain text, making it difficult for users to quickly scan task lists and identify task states.

To improve usability and visual consistency, the Product Team has requested a reusable **Status Badge** component that visually represents task statuses using color-coded badges.

Since task statuses appear across multiple areas of the application, this component must be reusable and easy to maintain.

---

## 🎯 Objective

Create a reusable React component named **`StatusBadge`** that displays task statuses as styled badges.

---

## 📋 Requirements

### Component

Create a functional React component called **`StatusBadge`**.

### Props

The component should accept a single prop:

```jsx
status: string
```

Supported status values:

| Status Value    | Badge Color    |
| --------------- | -------------- |
| `"pending"`     | Yellow / Amber |
| `"in-progress"` | Blue           |
| `"completed"`   | Green          |
| `"failed"`      | Red            |
| `"on-hold"`     | Gray           |

### Display Behavior

* Convert status values into human-readable labels.
* Examples:

  * `"pending"` → `Pending`
  * `"in-progress"` → `In Progress`
  * `"on-hold"` → `On Hold`

### Styling

* Render the badge as a compact pill/chip.
* Use a separate CSS file for styling.
* Do **not** use inline styles.
* Ensure each status has a visually distinct appearance.

### Error Handling

The component must gracefully handle unexpected values.

Example:

```jsx
<StatusBadge status="banana" />
```

Expected behavior:

* Application should not crash.
* Render a neutral/default badge style.
* Display a readable label.

### Demo Page

Create a simple demo page (`App.jsx` or equivalent) that renders:

* Pending
* In Progress
* Completed
* Failed
* On Hold

This page will be used for visual verification during review.

---

## ✅ Acceptance Criteria

* [ ] `StatusBadge` is implemented as a reusable functional component.
* [ ] Component resides in its own file.
* [ ] Accepts a `status` prop.
* [ ] Displays the correct label for each status.
* [ ] Applies the correct color styling for each status.
* [ ] Unknown statuses render gracefully with a default appearance.
* [ ] All styles are stored in a separate CSS file.
* [ ] A demo page renders all supported badge variations.
* [ ] Code is clean, readable, and follows consistent naming conventions.

---

## 🧭 Mentor Notes

**From Priya**

> Hey Saurav,
>
> A few things to keep in mind while working on this ticket:
>
> * Think carefully about how you'll map status values to colors and labels.
> * Consider what should happen when an unsupported status is passed.
> * Avoid over-engineering the solution. This is a small component, but it should still be production-quality.
> * Naming matters. File names, variables, functions, and CSS classes should all be clear and intentional.
>
> Try solving it independently first. If you get stuck, reach out and we'll work through it together.
>
> Good luck! 🚀

---

## 📈 Developer Progress Dashboard

| Metric          | Value                                                    |
| --------------- | -------------------------------------------------------- |
| Current Level   | Level 1 — Beginner Developer                             |
| Overall Rating  | Not Yet Evaluated                                        |
| Tasks Completed | 0 / 1                                                    |
| Skills Unlocked | None                                                     |
| Next Milestone  | Complete your first task and unlock Level 1 skill badges |

---

### 💡 Suggested Approach

1. Create the `StatusBadge` component.
2. Define a status-to-style mapping.
3. Add a fallback for unknown statuses.
4. Create a dedicated CSS file.
5. Build a small demo page to verify all badge variants.
6. Test with both valid and invalid status values.

Deliver a clean, reusable implementation that could be confidently used across multiple pages in the application.
