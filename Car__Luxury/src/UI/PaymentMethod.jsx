import { Link } from "react-router-dom";
import MasterCardImg from "../Img/PaymentImg/master-card.jpg";
import PayPalImg from "../Img/PaymentImg/paypal.jpg";
import "../Style/PaymentMethod.scss";

export default function PaymentMethod() {
    return (
        //payment method
        <>
            {/*payment method input direct bank transfer*/}
            <div className="payment">
                <label className="d-flex align-items-center gap-2">
                    <input type="radio"/> Direct Bank Transfer
                </label>
            </div>
            {/*payment method input cheque payment*/} 
            <div className="payment mt-3">
                <label className="d-flex align-items-center gap-2">
                    <input type="radio"/> Cheque Payment
                </label>
            </div>
            {/*payment method input master card and master card img*/} 
            <div className="payment mt-3 d-flex align-items-center justify-content-between">
                <label className="d-flex align-items-center gap-2">
                    <input type="radio"/> Master Card
                </label>
                <img src={MasterCardImg} alt="master-card-img"/>
            </div>
            {/*payment method input paypal and paypal img*/} 
            <div className="payment mt-3 d-flex align-items-center justify-content-between">
                <label className="d-flex align-items-center gap-2">
                    <input type="radio"/> Paypal
                </label>
                <img src={PayPalImg} alt="paypal-img"/>
            </div>
            {/*payment method button*/}
            <Link to="/">
                <div className="payment text-end mt-5">
                    <button>Reserve Now</button>
                </div>
            </Link>
        </>
    );
};