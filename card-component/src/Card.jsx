import profilePic from "./assets/Niloy-Khan.jpg";

function Card() {
  return (
    <div className="card">
      <img
        src={profilePic}
        alt="Profile Pic"
        className="card-image
      "
      />
      <h2 className="card-title">Niloy Khan</h2>
      <p className="card-text">I am a developer and a tutor</p>
    </div>
  );
}

export default Card;
