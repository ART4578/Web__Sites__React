import HTMLImg from "../../../assets/html-5.png";
import CSSImg from "../../../assets/css-3.png";
import SASSLImg from "../../../assets/sass.png";
import JSImg from "../../../assets/js.png";
import ReactJSLImg from "../../../assets/react.png";
import ReduxImg from "../../../assets/redux.png";
import NodeJSImg from "../../../assets/node-js.png";
import ExpressJSImg from "../../../assets/express-js.png";
import MySQLImg from "../../../assets/mysql.png";
import SQLImg from "../../../assets/sql.png";
import GitImg from "../../../assets/git.svg";
import "./ProLanguage.css";

export default function ProLanguage() {
    const ProLanguages = [
        { id : 1, img : HTMLImg, text : "HTML5(Basic, Deepened)", altText: "html-img" },
        { id : 2, img : CSSImg, text : "CSS3(Basic, Deepened)", altText: "css-img" },
        { id : 3, img : SASSLImg, text : "SASS/SCSS(Basic, Deepened)", altText: "sass-img" },
        { id : 4, img : JSImg, text : "JS(Basic, Asynchronous functions, Promise, DOM, BOM, OOP)", altText: "js-img" },
        { id : 5, img : ReactJSLImg, text : "React.js(Basic, Router)", altText: "reactjs-img" },
        { id : 6, img : ReduxImg, text : "Redux(Basic)", altText: "redux-img" },
        { id : 7, img : NodeJSImg, text : "Node.js(Basic)", altText: "nodejs-img" },
        { id : 8, img : ExpressJSImg, text : "Express.js(Basic)", altText: "expressjs-img" },
        { id : 9, img : MySQLImg, text : "MySQL(Basic)", altText: "mysql-img" },
        { id : 10, img : SQLImg, text : "SQL(Basic)", altText: "sql-img" },
        { id : 11, img : GitImg, text : "Git & GitHub(Basic)", altText: "git-img" },
    ];

    return (
        <div className="programmings">
            <h3 className="title3">PROFESSIONAL SKILLES</h3>
            <div className="programming">
            {
                ProLanguages.map((ProLang) => {
                    return (
                            <div key={ProLang.id}>
                                <div className="img"><img src={ProLang.img} alt={ProLang.altText} /></div>
                                <div className="text">{ProLang.text}</div>
                            </div>
                    )
                })
            }
            </div>
        </div>
    );
};