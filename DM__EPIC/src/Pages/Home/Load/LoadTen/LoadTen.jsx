import "./LoadTen.scss";

export default function LoadTen() {
    return (
        //load ten
        <div className="load__ten">
            {/*vector*/}
            <div className="vector__div">
                <div className="border1"></div>
                <div className="border2"></div>
                <div className="border3"></div>
                <div className="border4"></div>
                <div className="border5"></div>
                <div className="border6"></div>
                <div className="border7"></div>
                <div className="border8"></div>
                <div className="vector">
                    <div className="bg__color"></div>
                </div>
            </div>
            {/*border*/}
            <div className="border__div">
                <div className="border"></div>
            </div>
            {/*number*/}
            <div className="number__div">
                <p className="number">10</p>
            </div>
        </div>
    );
};