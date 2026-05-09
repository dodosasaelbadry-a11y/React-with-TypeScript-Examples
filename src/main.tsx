import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete: number) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1>React Practice App 🚀</h1>

        <p>
          Today&apos;s progress: <strong>{count}</strong>
        </p>

        <button style={styles.button} onClick={() => setCount(count + 1)}>
          Increase Progress
        </button>

        <button style={styles.secondaryButton} onClick={() => setCount(0)}>
          Reset
        </button>

        <hr style={styles.line} />

        <h2>My Tasks</h2>

        <div style={styles.inputRow}>
          <input
            style={styles.input}
            type="text"
            placeholder="Write a task..."
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />

          <button style={styles.button} onClick={addTask}>
            Add
          </button>
        </div>

        {tasks.length === 0 ? (
          <p>No tasks yet. Add your first task.</p>
        ) : (
          <ul style={styles.list}>
            {tasks.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span>{item}</span>

                <button
                  style={styles.deleteButton}
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "420px",
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  },

  button: {
    padding: "10px 14px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    marginRight: "8px",
  },

  secondaryButton: {
    padding: "10px 14px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#6b7280",
    color: "white",
    cursor: "pointer",
  },

  line: {
    margin: "24px 0",
  },

  inputRow: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
  },

  list: {
    padding: 0,
    listStyle: "none",
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "8px",
  },

  deleteButton: {
    padding: "6px 10px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#dc2626",
    color: "white",
    cursor: "pointer",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
