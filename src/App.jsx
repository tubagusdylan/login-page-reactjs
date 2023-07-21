import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Login</h1>
        </div>
        <form>
          <div className="body">
            <input type="text" placeholder="Username" />
            <br />
            <input type="password" placeholder="Password" />
          </div>
          <span>Hint</span>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default App;
