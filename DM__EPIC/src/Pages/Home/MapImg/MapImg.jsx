import "./MapImg.scss";

export default function MapImg() {
    return (
        //map img
        <div className="map__img">
            <iframe className="img" style={{ border: "0" }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13474287.676309992!2d49.65353930010606!3d44.46828223513147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shy!2sam!4v1683124502042!5m2!1shy!2sam" width="600" height="450" loading="lazy"></iframe>
        </div>
    );
};