import { Container, Row } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import BlogList from "../Components/UI/BlogList";

export default function Blog() {
    return (
        //blog
        <Helmet title="Blogs">
            {/*common section*/}
            <CommonSection title="Blogs"/>
            {/*blog page*/}
            <section>
                <Container>
                    <Row>
                        <BlogList/>
                        <BlogList/>    
                    </Row>    
                </Container>    
            </section>    
        </Helmet>
    );
};