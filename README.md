# ✈️ ClassPilot – Class Management App  

A React + Redux Toolkit project powered by Supabase, designed to manage **students and classes** with authentication, protected routes, and smooth CRUD operations.  

---

## 🚀 Features  

### 🔑 Authentication & User Management  
- User signup, login, and logout  
- Protected routes (only authenticated users can access)  
- User profile page with email & full name displayed  

### 📊 Dashboard  
- Centralized teacher dashboard to manage all data  
- Quick overview of students and classes  
- Easy navigation to CRUD operations

### 🎓 Class & Student Management  
- **CRUD operations** for Students and Classes  
  - Create, Read, Update, Delete Students  
  - Create, Read, Update, Delete Classes  
- Relational table **StudentClass** for mapping students to classes  

### ⚡ State Management  
- **Redux Toolkit** for predictable global state  
- **Redux Thunk** for async Supabase API calls  

### 🌐 Backend (Supabase)  
- **Tables**:  
  - `users` → Authentication  
  - `student` → Manage students  
  - `class` → Manage classes  
  - `studentclass` → Many-to-many relation between students & classes  

---

## 💡 Usage  

### 🔑 Authentication  
- Sign up or log in with email/password  
- Logout to end session  

### 🎓 Class & Student Management  
- Add, edit, delete, and view students  
- Add, edit, delete, and view classes  
- Assign students to classes via the `studentclass` relation  

### 👤 Profile Page  
- View email and full name of authenticated user  

---

## 🔧 Redux State Overview  

### **Auth Slice**
| Action        | Description                       |
|---------------|-----------------------------------|
| `loginUser`   | Authenticate user                 |
| `logoutUser`  | End session                       |


### **Student Slice**
| Action          | Description                   |
|-----------------|-------------------------------|
| `addStudent`    | Create a new student          |
| `updateStudent` | Edit student details          |
| `deleteStudent` | Remove student                |
| `fetchStudents` | Load all students             |

### **Class Slice**
| Action         | Description                    |
|----------------|--------------------------------|
| `addClass`     | Create a new class             |
| `updateClass`  | Edit class details             |
| `deleteClass`  | Remove class                   |
| `fetchClasses` | Load all classes               |

---

## ⚙️ Tech Stack  
- **React** – Frontend library  
- **Redux Toolkit** – State management  
- **Redux Thunk** – Handle async API calls  
- **Supabase** – Backend (Auth, Database, API)  
- **React Router** – Routing & Protected Routes  
- **Tailwind CSS** (optional if used) – Styling  

---

## 🌱 Future Enhancements  
- ✏️ Edit user info (full name, email, password update)  
- 🗑️ Delete user account  
- 📅 Attendance & grading features  
- 🔔 Notifications for class schedules  


