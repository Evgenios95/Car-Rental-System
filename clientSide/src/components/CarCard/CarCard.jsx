import "./CarCard.css";
import GrayColumn from "../ui-components/GrayColumn";
import GrayContainer from "../ui-components/GrayContainer";
import ford from "../../images/a6.jpeg";

export default function CarCard(props) {
  return (
    <GrayContainer>
      <GrayColumn>
        <div className="card">
          <div className="card-header">
            <div className="card-title-group">
              <h5 className="card-title">{props.group}</h5>
            </div>
          </div>
          <img className="card-image" src={ford} alt=""></img>
          <div className="card-model">{props.model}</div>
          <div className="card-info">{props.info}</div>
        </div>
      </GrayColumn>
    </GrayContainer>
  );
}
