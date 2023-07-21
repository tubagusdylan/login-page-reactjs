import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <h1>Ini halaman Home</h1>
    </>
  );
}
