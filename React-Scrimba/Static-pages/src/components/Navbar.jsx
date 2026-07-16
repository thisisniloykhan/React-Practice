import reactLogo from "../assets/react-logo.png";

export default function Navbar() {
  return (
    <header className="header-section">
      <nav className="nav-section">
        <img src={reactLogo} alt="React logo" className="nav-logo" />
        <span className="nav-title">ReactFacts</span>
      </nav>
    </header>
  );
}
