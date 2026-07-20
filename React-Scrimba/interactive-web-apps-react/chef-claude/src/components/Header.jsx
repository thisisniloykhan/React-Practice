import chefClaudeLogo from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="header-section">
      <img
        src={chefClaudeLogo}
        alt="Chef Claude Logo"
        className="header-icon"
      />
      <span className="header-title">Chef Claude</span>
    </header>
  );
}
