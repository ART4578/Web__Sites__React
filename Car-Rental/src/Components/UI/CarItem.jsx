import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../Styles/Car-Item.css";

export default function CarItem(props) {
    //destructuring item
    const { imgUrl, model, carName, automatic, speed, price } = props.item;

    return (
        //car item
        <Col lg="4" md="4" sm="6" className="mb-5">
            <div className="car__item">
                {/*car img*/}
                <div className="car__img">
                    <img src={imgUrl} alt="img-auto" className="w-100" />
                </div>
                {/*car content*/}
                <div className="car__item-content mt-4">
                    {/*car header*/}
                    <h4 className="section__title text-center">{carName}</h4>
                    <h6 className="rent__price text-center mt-">${price}.00<span>/ Day</span></h6>  
                    {/*car info*/} 
                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                        <span className="d-flex align-items-center gap-1"><i className="ri-car-line"></i>{model}</span>
                        <span className="d-flex align-items-center gap-1"><i className="ri-settings-2-line"></i>{automatic}</span>
                        <span className="d-flex align-items-center gap-1"><i className="ri-timer-flash-line"></i>{speed}</span>
                    </div>
                    {/*car buttons*/}
                    <button className="w-50 car__item-btn car__btn-rent">
                        <Link to={`/cars/${carName}`}>Rent</Link>
                    </button>
                    <button className="w-50 car__item-btn car__btn-details">
                        <Link to={`/cars/${carName}`}>Details</Link>
                    </button>                        
                </div>
            </div>
        </Col>
    );
};