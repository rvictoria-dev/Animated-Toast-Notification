# Animated Toast Notification

### ₊⊹ About

A simple page for practicing toast notifications, with three buttons: Success, Error, and Warning.
Each click causes a card to appear in the corner of the screen, featuring an icon, title, message, and close button.
A progress bar shows the time remaining, and the notification disappears on its own with a smooth animation.
Each type has its own color (green, burgundy, and orange) so the user can understand the alert at a glance.

https://github.com/user-attachments/assets/9e288fb7-7551-4e83-92e5-4213dcfc849f

---

### ★ Features

- **Three types of notifications:** Success, Error, and Warning, each with its own button.

- **Colors by type:** green for success, burgundy for error, and orange for warning, so the user can understand the message at a glance.

- **Custom icons:** Each toast displays an icon corresponding to its type (checkmark, X, and warning triangle).

- **Title and message:** Short, clear text explaining what happened.

- **Progress bar:** Visually shows how much time is left before the toast disappears.

- **Automatic closure:** The notification disappears on its own after a few seconds.

- **Close button:** Allows you to dismiss the notification manually.

- **Entrance animation:** The toast appears by sliding in from the right and fading in.
  
- **Clean design:** Light background, white card with a subtle shadow, and rounded corners.

- **Multiple stacked toasts:** Each click creates a new notification at the top, and the previous ones are organized below.

- **Easy to extend:** The types are stored in a JavaScript object, so creating a new type is as simple as adding a line of code.

---

### .ᐟ.ᐟ How It Works

- **Structure (HTML):** Three buttons call `showToast()` with the notification type (success, error, or warning). There is also an empty container, `#stack`, where the toasts are displayed.

- **Type Configuration (JS):** The `types` object stores, for each type, the color, the Font Awesome icon, the title, and the message. Thus, to create a new type, simply add a line.

- **Creating the toast:** showToast() retrieves the type’s data using destructuring, creates a `<div class="toast">` with createElement, and renders the content with innerHTML.
Dynamic color (CSS): JavaScript sets the --color variable in the toast using setProperty, and CSS uses this variable in the progress bar.

- **Animations (CSS):** @keyframes slide makes the toast slide in from the right with a fade. Meanwhile, @keyframes countdown, applied to the ::after selector, shrinks the bar with scaleX(0) over 3 seconds.

- **Stacking:** `prepend()` places the new toast at the top of the #stack, and `flex-direction: column` with `gap` keeps the notifications organized, one below the other.
Removal: The toast is removed with `remove()` when the user clicks the X or after 3 seconds, via `setTimeout`.

**Summary of the flow:**
```
 click → showToast(type) → creates the card → bar shrinks for 3 seconds → toast is removed.
```

---

### ⚙️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Font Awesome 6.5.2:** success, error, warning, and close icons, loaded via CDN.

---

### 🖿 Project structure

```
Animated-Toast-Notification/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

### 📖 What i learned

- **Creating elements in the DOM:** Use `createElement` and `innerHTML` to build the toast with JavaScript, instead of pre-defining it in the HTML.

- **Template literals:** Build the card’s content using `crase` and `${}`, inserting the color, icon, title, and message.

- **Configuration object:** store data for each type in `types` and create new types with a single line.

- **Array destructuring:** extract [color, icon, title, text] all at once.

- **Dynamic CSS variables:** use `setProperty(“--color”, ...)` to pass the color from JavaScript to CSS.

- **Animations with @keyframes:** create the slide-in effect and the progress bar shrinking with scaleX(0) (countdown).

- **::after pseudo-element:** draw the progress bar without needing an extra element in the HTML.

- **Timing control:** Use setTimeout to remove the toast after 3 seconds.

- **Removing elements:** Use `remove()` triggered by the close button or after a set time.

- **Stacking with `prepend()`:** Place the newest toast at the top and organize the stack using Flexbox and `gap`.

- **Font Awesome via CDN:** Load an icon library with a single `<link>` and use the `fa-solid` classes in the HTML.
