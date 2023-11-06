import { Col } from "reactstrap";
import { Link } from "react-router-dom"; 
import OurMembersData from "../Data/OurMembersData"; 
import "../Style/OurMembers.scss";

export default function OurMembers() {   
    return (
        //our members
        <>
            {
                OurMembersData.map(item => {
                    return (
                        <Col lg="3" md="3" sm="4" xs="6" key={item.id} className="mb-4">
                            <div className="single__member">
                                {/*our members img and social icons*/}
                                <div className="single__member-img">
                                    {/*our members img url*/}
                                    <img src={item.imgUrl} alt="img-url" className="w-100"/>
                                    {/*our members social icons*/}
                                    <div className="single__member-social">
                                        <Link to={item.fbUrl}>
                                            <i className="ri-facebook-line"></i>
                                        </Link>
                                        <Link to={item.twitUrl}>
                                            <i className="ri-twitter-line"></i>
                                        </Link>
                                        <Link to={item.linkedinUrl}>
                                            <i className="ri-linkedin-line"></i>
                                        </Link>
                                        <Link to={item.instUrl}>
                                            <i className="ri-instagram-line"></i>
                                        </Link>
                                    </div>
                                </div>
                                {/*our members header and description*/}
                                <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                                <p className="section__description text-center txt__color">{item.experience}</p>
                            </div>
                        </Col>
                    )
                })
            }
        </>
    );
};       