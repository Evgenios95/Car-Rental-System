import "./CarCard.css"
import CRColumn  from "../../ui-components/CRColumn";
import CRContainer from "../../ui-components/CRContainer";
import ford from "../../images/a6.jpeg";

export default function CarCard(props){
    return (
      <CRContainer>
        <CRColumn>
        <div className="card">
        <div className="card-header">
              <div className="card-title-group">
                <h5 className="card-title">{props.carTitle}</h5>
              </div>
            </div>
             <img className="image" src={ford} alt=""></img>
            <div className="card-text">{props.carModel}</div>
            <div className="card-info">{props.carInfo}</div>
         </div>
        </CRColumn>
      </CRContainer>
    );
}