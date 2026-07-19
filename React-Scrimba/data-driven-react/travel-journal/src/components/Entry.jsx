import marker from "../assets/marker.png";

export default function Entry(props) {
  console.log(props);
  return (
    <article className="entry">
      <div className="entry-img-container">
        <img
          src={props.img.src}
          alt={props.img.alt}
          className="entry-img"
        />
      </div>
      <div className="entry-body">
        <div className="entry-header">
          <img src={marker} alt="marker-icon" />
          <span>{props.country.toUpperCase()}</span>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </div>
        <div className="entry-info">
          <h2>{props.title}</h2>
          <h5>{props.dates}</h5>
          <p>{props.text}</p>
        </div>
      </div>
    </article>
  );
}
