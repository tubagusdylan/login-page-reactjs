import "./App.css";
import { useState, useEffect, useRef } from "react";
import { user } from "./lib/data";

function App() {
  // Buat ref, agar ketika render pertama kali, input username akan focus
  const ref = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("typing");
  const [err, setErr] = useState(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(username, password);
      setUsername("");
      setPassword("");
      setStatus("success");
      setErr(null);
    } catch (error) {
      setUsername("");
      setPassword("");
      setStatus("typing");
      setErr(error);
    }
  }

  if (status === "success") {
    return (
      <div className="container">
        <h1 className="success">Login berhasil!</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="body">
            <input type="text" placeholder="Username" ref={ref} onChange={(e) => setUsername(e.target.value)} value={username} />
            <br />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          {err !== null && <p hidden={status === "submitting"}>{err.message}</p>}
          <span onClick={() => alert("username: root, password: root")}>Hint</span>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

function submitForm(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username.length === 0) {
        reject(new Error("Input tidak boleh kosong"));
      }
      let inputFalse = username !== user.name && password !== user.password;
      if (inputFalse) {
        reject(new Error("Input salah, coba lagi!!!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default App;
