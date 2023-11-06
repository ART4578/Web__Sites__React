import PhoneImg from "../../../assets/phone.svg";
import FacebookImg from "../../../assets/facebook.svg";
import GitHubImg from "../../../assets/github.svg";
import TelegramImg from "../../../assets/telegram.svg";
import MailImg from "../../../assets/mail.svg";
import "./Contact.css";

export default function Contact() {
    const Contacts = [
        { id : 1, img : PhoneImg, text : "+374 94 20 66 86", altText : "phone" },
        { id : 2, img : FacebookImg, text : "Artur Petrosyan", altText : "facebook" },
        { id : 3, img : GitHubImg, text : "ART4578", altText : "phone", altText : "github" },
        { id : 4, img : TelegramImg, text : "+374 94 20 66 86", altText : "telegram" },
        { id : 5, img : MailImg, text : "artur17-00@inbox.ru", altText : "mail" }
    ];
     
    return (
        <div className="contacts">
            <h3 className="title">Contact</h3>
            <div className="contact">
            {
                Contacts.map((Contact) => {
                    return (
                            <div key={Contact.id}>
                                <div className="img"><img src={Contact.img} alt={Contact.altText} /></div>
                                <div className="text">{Contact.text}</div>
                            </div>
                    )
                })
            }
            </div>
        </div>
    );
};