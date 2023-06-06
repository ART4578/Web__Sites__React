import { Col } from "reactstrap";
import "../../Styles/Services-List.css";

export default function ServiceItem({ item }) {
    return (
        //service item
        <Col lg="4" md="4" sm="6" className="mb-3">
            <div className="service__item">
                {/*service item icon*/}
                <span className="mb-3 d-inline-block">
                     <i className={item.icon}></i>
                </span>
                {/*service item title*/}
                <h6>{item.title}</h6>
                {/*service item description*/}
                <p className="section__description">{item.desc}</p>
             </div>
        </Col>
    );
};