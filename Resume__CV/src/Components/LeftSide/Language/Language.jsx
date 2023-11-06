import "./Language.css";

export default function Language() {
    const Languages = [
        { id : 1, text : "English(Basic)" },
        { id : 2, text : "Russia(Basic)" },
        { id : 3, text : "Armenia(Native Language)" }
    ];

    return (
        <div className="languages">
            <h3 className="title">Languages</h3>
            <div className="language">
                {
                    Languages.map((Lang) => {
                        return (
                            <div key={Lang.id}>
                                <div className="text">{Lang.text}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};