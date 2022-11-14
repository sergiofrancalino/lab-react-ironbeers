import { Link } from "react-router-dom";

function HomeCards(props) {

  return (
    <div>
      <Link to={props.link}>
        <img src={props.imagem} className="card-img-top" alt="..." />
      </Link>

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text} </p>
      </div>
    </div>
  );
}
export default HomeCards
