import BlogData from "../../assets/data/blogData";
import BlogItem from "../UI/BlogItem";
import "../../Styles/Blog-Item.css";

export default function BlogList() {
    return (
        //blog list
        <>
            {
                BlogData.map(item => {
                    return <BlogItem item={item} key={item.id}/>
                })
            }
        </>
    );
};