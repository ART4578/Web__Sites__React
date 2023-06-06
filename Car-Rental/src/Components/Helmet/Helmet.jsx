export default function Helmet(props) {
    //car rental web site title
    document.title = "Rent Car Service - " + props.title;

    //helmet
    return <div className="w-100">{props.children}</div>
};