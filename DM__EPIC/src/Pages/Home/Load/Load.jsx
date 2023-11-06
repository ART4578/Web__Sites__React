import LoadOne from "./LoadOne/LoadOne";
import LoadTwo from "./LoadTwo/LoadTwo";
import LoadThree from "./LoadThree/LoadThree";
import LoadFour from "./LoadFour/LoadFour";
import LoadFive from "./LoadFive/LoadFive";
import LoadSix from "./LoadSix/LoadSix";
import LoadSeven from "./LoadSeven/LoadSeven";
import LoadEight from "./LoadEight/LoadEight";
import LoadNine from "./LoadNine/LoadNine";
import LoadTen from "./LoadTen/LoadTen";
import LoadEleven from "./LoadEleven/LoadEleven";
import LoadTwelve from "./LoadTwelve/LoadTwelve";
import LoadThirteen from "./LoadThirteen/LoadThirteen";
import LoadFourteen from "./LoadFourteen/LoadFourteen";
import LoadFifteen from "./LoadFifteen/LoadFifteen";
import LoadSixteen from "./LoadSixteen/LoadSixteen";
import LoadSeventeen from "./LoadSeventeen/LoadSeventeen";
import LoadEighteen from "./LoadEighteen/LoadEighteen";
import LoadNineteen from "./LoadNineteen/LoadNineteen";
import LoadTwenty from "./LoadTwenty/LoadTwenty";
import "./Load.scss";

export default function Load() {
    return (
        //load
        <>
          {/*header*/}
          <div className="header">
            <h1 className="head__text">Load</h1>
          </div>
          {/*loads*/}
          <div className="loads__load"> 
              <LoadOne/>
              <LoadTwo/>
              <LoadThree/>
              <LoadFour/>
              <LoadFive/>
              <LoadSix/>
              <LoadSeven/>
              <LoadEight/>
              <LoadNine/>
              <LoadTen/>
              <LoadEleven/>
              <LoadTwelve/>
              <LoadThirteen/>
              <LoadFourteen/>
              <LoadFifteen/>
              <LoadSixteen/>
              <LoadSeventeen/>
              <LoadEighteen/>
              <LoadNineteen/>
              <LoadTwenty/>
          </div>
        </>
    );
};