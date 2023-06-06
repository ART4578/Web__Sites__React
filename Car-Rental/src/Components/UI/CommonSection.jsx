import { Container } from "reactstrap";
import "../../Styles/Common-Section.css";

export default function CommonSection({ title }) {
    return (
        //common section
        <section className="common__section mb-5">
            <Container className="text-center">
                <h1 className="text-light">{title}</h1>
            </Container>
        </section>
    );
};