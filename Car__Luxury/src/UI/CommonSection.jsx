import { Container } from "reactstrap";

export default function CommonSection({ title }) { 
    return (
        //common section
        <section className="common__section mb-5">
            <Container className="text-center">
                <h1 className="text__light">{title}</h1>
            </Container>
        </section>
    );
};