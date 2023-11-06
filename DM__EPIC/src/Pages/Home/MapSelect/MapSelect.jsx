import CountrysAsiaData from "../../../Assets/Data/CountrysAsiaData";
import CountrysEuropeData from "../../../Assets/Data/CountrysEuropeData";
import CountrysNorthAmericaData from "../../../Assets/Data/CountrysNorthAmericaData";
import CountrysSouthAmericaData from "../../../Assets/Data/CountrysSouthAmericaData";
import CountrysAfricaData from "../../../Assets/Data/CountrysAfricaData";
import CountrysOceainiaData from "../../../Assets/Data/CountrysOceainiaData";
import CitysData from "../../../Assets/Data/CitysData";
import "./MapSelect.scss";

export default function MapSelect() {
    return (
        //map select
        <div className="map__select">
            {/*header*/}
            <h1 className="header">Map</h1>
            {/*select*/}
            <div className="select">
                {/*select country*/}
                <div className="select__country">
                    <select name="country" id="country" className="country">
                        <optgroup label="Asia"></optgroup>
                            {
                                CountrysAsiaData.map((CountryAsiaData) => {
                                    return (
                                        <option key={CountryAsiaData.id} value={CountryAsiaData.value}>{CountryAsiaData.text}</option>
                                    )
                                })
                            }
                        <optgroup label="Europe"></optgroup>  
                            {
                                CountrysEuropeData.map((CountryEuropeData) => {
                                    return (
                                        <option key={CountryEuropeData.id} value={CountryEuropeData.value}>{CountryEuropeData.text}</option>
                                    )
                                })
                            }
                        <optgroup label="North America"></optgroup>  
                            {
                                CountrysNorthAmericaData.map((CountryNorthAmericaData) => {
                                    return (
                                        <option key={CountryNorthAmericaData.id} value={CountryNorthAmericaData.value}>{CountryNorthAmericaData.text}</option>
                                    )
                                })
                            }
                        <optgroup label="South America"></optgroup>  
                            {
                                CountrysSouthAmericaData.map((CountrySouthAmericaData) => {
                                    return (
                                        <option key={CountrySouthAmericaData.id} value={CountrySouthAmericaData.value}>{CountrySouthAmericaData.text}</option>
                                    )
                                })
                            }
                        <optgroup label="Africa"></optgroup>  
                            {
                                CountrysAfricaData.map((CountryAfricaData) => {
                                    return (
                                        <option key={CountryAfricaData.id} value={CountryAfricaData.value}>{CountryAfricaData.text}</option>
                                    )
                                })
                            }
                        <optgroup label="Oceainia"></optgroup>  
                            {
                                CountrysOceainiaData.map((CountryOceainiaData) => {
                                    return (
                                        <option key={CountryOceainiaData.id} value={CountryOceainiaData.value}>{CountryOceainiaData.text}</option>
                                    )
                                })   
                            }
                    </select>
                </div>
                {/*select city*/}
                <div className="select__city">
                    <select name="city" id="city" className="city">
                        {
                            CitysData.map((CityData) => {
                                return (
                                    <option key={CityData.id} value={CityData.value}>{CityData.text}</option>
                                )
                            })
                        }             
                    </select>
                </div>
            </div>
            {/*text btn show*/}
            <div className="buttons__div">
                {/*text*/}
                <p className="txt">Geoposition</p>
                {/*btn show*/}
                <div className="show__div">
                    <div className="show__submit"></div>
                </div>
            </div>
            {/*button*/}
            <div className="button__show">
                <button className="btn__show">Save</button>
            </div>
        </div>
    );
};