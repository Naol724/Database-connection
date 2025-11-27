import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", age: "" });

  // Load students
  useEffect(() => {
    axios.get("http://localhost:3000/students")
      .then(res => setStudents(res.data));
  }, []);

  // Add new student
  const addStudent = () => {
    axios.post("http://localhost:3000/students", form)
      .then(() => {
        alert("Student Added!");
        window.location.reload();
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Student List</h1>

      {students.map((s) => (
        <p key={s.id}>{s.name} — {s.age}</p>
      ))}

      <h2>Add Student</h2>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Age"
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      <button onClick={addStudent}>Add</button>
    </div>
  );
}

export default App;
