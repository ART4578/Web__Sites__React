import "./AuthTextBtn.scss";

export default function AuthTextBtn() {
    return (
        //text btn
        <div className="text__btn">
            {/*text content*/}
            <div className="text__content">
                <p className="content">Remember me</p>
            </div>
            {/*btn show*/}
            <div className="btn__show">
                <div className="btn__radius"></div>
            </div>
        </div>  
    );
};