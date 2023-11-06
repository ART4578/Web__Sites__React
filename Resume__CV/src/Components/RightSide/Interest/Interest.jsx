import BooksImg from "../../../assets/books.svg";
import BracketsImg from "../../../assets/brackets-curly.svg";
import RestaurantImg from "../../../assets/restaurant.svg";
import FootballImg from "../../../assets/football.svg";
import "./Interest.css";

export default function Interest() {
    const Interests = [
        { id : 1, img : BooksImg, text : "Books", altText : "books" },
        { id : 2, img : BracketsImg, text : "Programming", altText : "programming" },
        { id : 3, img : RestaurantImg, text : "Cooking", altText : "cooking" },
        { id : 4, img : FootballImg, text : "Football", altText : "football" }
    ];

    return (
        <div className="interest">
            <h2 className="title5">INTEREST</h2>
            <div className="int">
                {
                  Interests.map((Interes) => {
                      return (
                        <div key={Interes.id}>
                            <div className="img"><img src={Interes.img} alt={Interes.altText}/></div>
                            <div className="text">{Interes.text}</div>
                        </div>
                      )
                  })
                }
            </div>
        </div>
    );
};