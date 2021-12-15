import "./CarCard.css";
import ford from "../../images/a6.jpeg";
import { useParams } from "react-router-dom";

export default function CarCard() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <h5 className="card-title">{id}</h5>
        </div>
      </div>
      <img className="card-image" src={ford} alt=""></img>
      <div className="card-model">{id.model}</div>
      <div className="card-info">{id.info}</div>
    </div>
  );
}
