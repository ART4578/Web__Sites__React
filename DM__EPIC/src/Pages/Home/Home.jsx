import HomeHashingSpeed from "./HomeHashingSpeed/HomeHashingSpeed";
import HomeSpeedTimerCounter from "./HomeSpeedTimerCounter/HomeSpeedTimerCounter";
import AlgorithmEpic from "./AlgorithmEpic/AlgorithmEpic";
import AlgorithmRg from "./AlgorithmRg/AlgorithmRg";
import AlgorithmSgr from "./AlgorithmSgr/AlgorithmSgr";
import MapImg from "./MapImg/MapImg";
import MapSelect from "./MapSelect/MapSelect";
import WalletSelect from "./WalletSelect/WalletSelect";
import FanOne from "./FanOne/FanOne";
import FanTwo from "./FanTwo/FanTwo";
import Load from "./Load/Load";
import TempsNum from "./TempsNum/TempsNum";
import TempsTemp from "./TempsTemp/TempsTemp";
import TempsM from "./TempsM/TempsM";
import TempsMh from "./TempsMh/TempsMh";
import "./Home.scss";

export default function Home() {
    return (
        //home page
        <div className="home__page">
            {/*speeds*/}
            <div className="speed__div">
                <div className="speeds">
                    {/*hashing speed*/}
                    <HomeHashingSpeed/>  
                    {/*speed timer, speed counter*/}
                    <HomeSpeedTimerCounter/>
                </div>
            </div>
            {/*alg head*/}
            <div className="alg__head">
                <h1 className="head__cont">Algorithm</h1>
            </div>
            {/*algorithm*/}
            <div className="algorithm__div">
                <div className="algorithm">
                    {/*algorithm epic*/}
                    <AlgorithmEpic/>
                    {/*algorithm rg*/}
                    <AlgorithmRg/>
                    {/*algorithm sgr*/}
                    <AlgorithmSgr/>
                </div>
            </div>
            {/*map head*/}
            <div className="map__head">
                <h1 className="head__cont">Geolocation</h1>
            </div> 
            {/*map*/}
            <div className="map__div">
                <div className="map">
                    {/*map img*/}
                    <MapImg/>    
                    {/*map select*/}
                    <MapSelect/> 
                </div>
            </div> 
            {/*wallet head*/}
            <div className="wall__head">
                <h1 className="head__cont">Wallet</h1>
            </div> 
            {/*wallet select*/}
            <div className="wallet__select__div">
                <div className="wallet__select">
                    {/*wallet selects*/}
                    <WalletSelect/>
                </div>
            </div> 
            {/*fans head*/}
            <div className="fans__head">
                <h1 className="head__cont">Load</h1>
            </div> 
            {/*fans*/}
            <div className="fans__div">
                <div className="fans">
                    {/*fan one*/}
                    <FanOne/>
                    {/*fan two*/}
                    <FanTwo/>   
                </div>
            </div>
            {/*load head*/}
            <div className="load__head">
                <h1 className="head__cont">Load</h1>
            </div> 
            {/*load*/}
            <div className="load__div">
                <div className="load">
                   {/*load*/}
                   <Load/> 
                </div>
            </div>
            {/*temps*/}
            <div className="temps__div">
                <div className="temps">
                    {/*temps num*/}
                    <TempsNum/>
                    {/*temps temp*/}
                    <TempsTemp/>
                    {/*temps m*/}
                    <TempsM/>
                    {/*temps mh*/}
                    <TempsMh/>
                </div>
            </div>
        </div>
    );
};