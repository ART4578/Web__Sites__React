import ServicesData from "../../assets/data/serviceData";
import ServiceItem from "../../Components/UI/ServiceItem"; 
import "../../Styles/Services-List.css";

export default function ServicesList() {
    return (
        //services list
        <>
            {
                ServicesData.map(item => {
                    return <ServiceItem item={item} key={item.id}/>
                })                
            }
        </>
    );
};