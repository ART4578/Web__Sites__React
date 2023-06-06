import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../Styles/Blog-Item.css";

export default function BlogItem({ item }) {
    //destructuring item
    const { imgUrl, title, author, date, description, time } = item;

    return (
        //blog item
        <Col lg="4" md="4" sm="6" className="mb-5">
            <div className="blog__item">
                {/*blog img*/}
                <img src={imgUrl} alt="blog-img" className="w-100"/>
                {/*blog info*/}
                <div className="blog__info p-3">
                    {/*blog title*/}
                    <Link to={`/blogs/${title}`} className="blog__title">{title}</Link>
                    {/*blog description*/}
                    <p className="section__description mt-3">
                        {
                            description.length > 100 ? description.substr(0, 100) : description
                        }
                    </p>
                    {/*blog title*/}
                    <Link to={`/blogs/${title}`} className="read__more">Read More</Link>
                    {/*blog time*/}
                    <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
                        {/*blog author*/}
                        <span className="blog__author">
                            <i className="ri-user-line"></i> {author}
                        </span>
                        {/*blog date, time*/}
                        <div className="d-flex align-items-center gap-3">
                            {/*blog date*/}
                            <span className="d-flex align-items-center gap-1 section__description">
                                <i className="ri-calendar-line"></i> {date}
                            </span>
                            {/*blog time*/}
                            <span className="d-flex align-items-center gap-1 section__description">
                                <i className="ri-time-line"></i> {time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};