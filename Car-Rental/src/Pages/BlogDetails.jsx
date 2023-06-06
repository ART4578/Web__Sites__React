import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CommentImg from "../assets/all-images/ava-1.jpg";
import BlogData from "../assets/data/blogData";
import Helmet from "../Components/Helmet/Helmet";
import "../Styles/Blog-Details.css";

export default function BlogDetails() {
    //useParams hook
    const {slug} = useParams();

    //blog function
    const blog = BlogData.find(blog => blog.title === slug);

    //useEffect hook
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blog]);

    return (
        //blog details
        <Helmet title={blog.title}>
            {/*blog details info*/}
            <section>
                <Container>
                    <Row>
                        {/*blog details info and comment*/}
                        <Col lg="8" md="8">
                            <div className="blog__details">
                                {/*blog details img*/}
                                <img src={blog.imgUrl} alt="img-url"/>
                                {/*blog details title*/}
                                <h2 className="section__title mt-4">{blog.title}</h2>
                                {/*blog puplisher*/} 
                                <div className="blog__puplisher d-flex align-items-center gap-4 mb-4">
                                    {/*blog author*/}
                                    <span className="blog__author">
                                        <i className="ri-user-line"></i> {blog.author}
                                    </span>
                                    {/*blog date*/}
                                    <span className="d-flex align-items-center gap-1 section__description">
                                        <i className="ri-calendar-line"></i> {blog.date}
                                    </span>
                                    {/*blog time*/}
                                    <span className="d-flex align-items-center gap-1 section__description">
                                        <i className="ri-time-line"></i> {blog.time}
                                    </span>   
                                </div>
                                {/*blog details description*/}
                                <p className="section__description">
                                    {blog.description}    
                                </p>
                                <h6 className="ps-5 fw-normal">
                                    <blockquote className="fs-4">
                                        {blog.quote}
                                    </blockquote>
                                </h6>
                                {/*blog details description*/}
                                <p className="section__description">
                                    {blog.description}    
                                </p>                          
                            </div>
                            {/*blog details comment*/}
                            <div className="comment__list mt-5">
                                {/*blog details comment title*/}
                                <h4 className="mb-5">3 Comments</h4>
                                {/*blog details comment block*/}
                                <div className="single__comment d-flex gap-3">
                                    {/*blog details comment img*/}
                                    <img src={CommentImg} alt="img-comment"/>
                                    {/*blog details comment content*/}
                                    <div className="comment__content">
                                        <h6 className="fw-bold">David Visa</h6>
                                        <p className="section__description mb-0">14, July 2023</p>
                                        <p className="section__description">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat repellat aliquid voluptatem architecto provident rerum doloremque natus dolore commodi!
                                        </p>
                                        {/*blog details replay icon*/}
                                        <span className="replay d-flex align-items-center gap-1">
                                            <i className="ri-reply-line"></i> Replay
                                        </span>
                                    </div>
                                </div>
                                {/*blog details comment info*/}
                                <div className="leave__comment-form mt-5">
                                    {/*blog details comment title*/}
                                    <h4>Leave a Comment</h4>
                                    {/*blog details comment description*/}
                                    <p className="section__description">
                                        You must sign-in to make or comment a post
                                    </p>
                                    {/*blog details comment form*/}
                                    <Form>
                                        {/*blog details comment form full name and email*/}
                                        <FormGroup className="d-flex gap-3">
                                            <Input type="text" placeholder="Full name"/>
                                            <Input type="email" placeholder="Email"/>
                                        </FormGroup>
                                        {/*blog details comment form textarea*/}
                                        <FormGroup>
                                            <textarea rows="5" className="w-100 py-2 px-3" placeholder="Comment..."></textarea>
                                        </FormGroup>
                                        {/*blog details comment form button*/}
                                        <button className="btn comment__btn mt-3">Post a Comment</button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        {/*blog details imgs*/}
                        <Col lg="4" md="4">
                            <div className="recent__post mb-4">
                                <h5 className="fw-bold">Recent Posts</h5>
                            </div>
                            {
                                BlogData.map(item => {
                                    return (
                                        <div className="recent__blog-post mb-4" key={item.id}>
                                            <div className="recent__blog-item d-flex gap-3">
                                                <img src={item.imgUrl} alt="img-url" className="w-25 rounded-2"/>
                                                <h6>
                                                    <Link to={`/blogs/${item.title}`}>
                                                        {blog.title}
                                                    </Link>
                                                </h6>
                                            </div>        
                                        </div>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Container>    
            </section>             
        </Helmet>
    );
};