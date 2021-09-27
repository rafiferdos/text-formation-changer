import React from "react";

export default function About(props) {
    let myStyle = {
        color: props.mode === "dark" ? "white":"#042743",
        backgroundColor: props.mode === "dark" ? "rgb( 36 74 104 )" : "white",
    }
    return (
        <>
            <div
                className="accordion container my-5"
                id="accordionExample"
            >
                <h1 className={props.mode === "dark" ? "text-light" : "text-dark"}>About Us</h1>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            style={myStyle}
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Analyze your text
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        style={myStyle}
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div style={myStyle} className="accordion-body">
                            Text-Formation-Changer gives you a way to analyze your text quickly and efficiently.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            style={myStyle}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Free to use
                        </button>
                    </h2>
                    <div
                        style={myStyle}
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div style={myStyle} className="accordion-body">
                            Text-Formation-Changer is a free character counter tool that provides instant character count & word count statistics for a given text. Text-Formation-Changer reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            style={myStyle}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Browser Compatible
                        </button>
                    </h2>
                    <div
                        style={myStyle}
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div style={myStyle} className="accordion-body">
                            The word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
