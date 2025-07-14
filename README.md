# Todo List React App

A simple and intuitive todo list application built with **React**. This app allows users to manage their daily tasks with features like adding, editing, completing, and deleting todos. The application includes tab-based filtering and local storage persistence to maintain your tasks across browser sessions.

---

## 🚀 Features

- **Add new tasks** with a simple input interface
- **Edit existing tasks** with inline editing
- **Mark tasks as complete** or incomplete
- **Delete tasks** when no longer needed
- **Filter tasks** by All, Open, or Completed status
- **Local storage persistence** - your tasks are saved automatically
- **Responsive design** with clean, modern UI
- **Real-time task counters** for better task management

---

## Screenshots

### Todo App Interface

![Todo App Interface](todo-list\todo-list\public\screenshots\todo-list-user-interface.png)
_Main view of the Todo app showing the task list, filter tabs, and input area._

---

## 📝 Components Overview

### `App.jsx`

- **State Management:**
  - `todos`: array of todo objects with `input` and `complete` properties
  - `selectedTab`: tracks current filter view (All, Open, Completed)
- **Core Functions:**
  - `handleAddTodo()`: adds new tasks to the list
  - `handleCompleteTodo()`: toggles task completion status
  - `handleEditTodo()`: updates task content
  - `handleDeleteTodo()`: removes tasks from the list
  - `handleSaveData()`: persists data to localStorage
- **Local Storage Integration:** Automatically saves and loads tasks on app initialization

### `Header.jsx`

- Displays the current number of open tasks
- Shows dynamic text (task/tasks) based on count
- Features gradient text styling for visual appeal

### `Tabs.jsx`

- Provides three filter options: All, Open, Completed
- Shows task count for each category in real-time
- Highlights the currently selected tab
- Includes visual separator with `<hr />` element

### `TodoCard.jsx`

- **Dual Mode Display:**llllll
  - **View Mode**: Shows task text with action buttons (Edit, Done, Delete)
  - **Edit Mode**: Inline text input with Save/Cancel options
- **State Management:**
  - `isEditing`: toggles between view and edit modes
  - `editValue`: manages the input field value during editing
- **Keyboard Support:** Press Enter to save changes while editing
- **Smart Button States:** Edit and Done buttons are disabled for completed tasks

### `TodoInput.jsx`

- Simple input field for adding new tasks
- **State:** `inputValue` manages the current input
- **Validation:** Prevents adding empty tasks
- **Auto-clear:** Input field clears after successful task addition
- **Icon Integration:** Uses Font Awesome plus icon for the add button

### `TodoList.jsx`

- **Filtering Logic:** Dynamically filters todos based on selected tab
- **Index Management:** Handles proper indexing for filtered vs. original todo arrays
- **Props Passing:** Distributes necessary handlers and data to TodoCard components

---

## 🎓 How It Works

1. **App Initialization:**

   - Loads with a welcome message todo marked as complete
   - Checks localStorage for existing todos and loads them
   - Defaults to "Open" tab view

2. **Adding Tasks:**

   - User types in the input field
   - Clicks the plus button or presses Enter
   - New task is added to the list and saved to localStorage

3. **Task Management:**

   - **Edit**: Click Edit button → inline editing → Save/Cancel
   - **Complete**: Click Done button → task marked as complete
   - **Delete**: Click Delete button → task removed entirely

4. **Filtering:**

   - **All**: Shows all tasks regardless of status
   - **Open**: Shows only incomplete tasks
   - **Completed**: Shows only completed tasks

5. **Data Persistence:**
   - All changes automatically save to localStorage
   - Data persists across browser sessions

---

## 📚 Technologies Used

- **React** (functional components & hooks)
- **useState** for component state management
- **useEffect** for localStorage integration
- **Local Storage** for data persistence
- **Font Awesome** for icons
- **CSS** for styling and responsive design

---

## 🌐 Getting Started

### Prerequisites

- Node.js (>=14)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd todo-list-app

# Install dependencies
npm install

# Start the development server
npm run dev
# or
npm start
```

### File Structure

```
src/
├── App.jsx
├── components/
│   ├── Header.jsx
│   ├── Tabs.jsx
│   ├── TodoCard.jsx
│   ├── TodoInput.jsx
│   └── TodoList.jsx
└── styles/
    └── index.css
```

---

## 🔧 Key Features Explained

### Local Storage Integration

The app automatically saves your todos to browser localStorage, ensuring your tasks persist between sessions. The data is stored as JSON and includes both the task content and completion status.

### Tab-Based Filtering

Three intelligent filters help you focus on what matters:

- **All**: Complete overview of all tasks
- **Open**: Focus on pending work
- **Completed**: Review accomplished tasks

### Inline Editing

Tasks can be edited directly in the list without navigating to separate pages. The interface seamlessly switches between view and edit modes.

### Smart UI States

- Completed tasks have disabled Edit and Done buttons
- Empty input validation prevents adding blank tasks
- Real-time counters update as you manage tasks

---

## 🚀 Future Enhancements

- Task categories or tags
- Due dates and reminders
- Search functionality
- Task priority levels
- Export/import functionality
- Dark mode toggle

---
