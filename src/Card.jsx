const Card = ({ company, title, description, year }) => {
    return (
      <div className="card">
        <h2>{title}</h2>
        <h4>{company}</h4>
        <h3>{year}</h3>
        <p>{description}</p>
      </div>
    );
  };

  export default Card;
