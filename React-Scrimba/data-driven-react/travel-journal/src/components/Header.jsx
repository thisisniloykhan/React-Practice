import globe from "../assets/globe.png";

export default function Header() {
  return (
    <header className="header-section">
      <img src={globe} alt="Globe-logo" className="header-logo" />
      <span className="header-title">My Travel Journal</span>
    </header>
  );
}
