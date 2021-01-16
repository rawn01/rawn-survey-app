import React from "react";

function MultiSelectConfirm(props) {
    return ( 
        <div className="confirm-container">
           <h6>{props.index + 1}. {props.question}</h6>

           <div className="confirm-multi">  
                <div>
                    <input type="checkbox" />
                    <span className="confirm-text">{props.options[0]}</span>
                </div>

                <div>
                    <input type="checkbox" />
                    <span className="confirm-text">{props.options[1]}</span>
                </div>

                <div>
                    <input type="checkbox" />
                    <span className="confirm-text">{props.options[2]}</span>
                </div>

                <div>
                    <input type="checkbox" />
                    <span className="confirm-text">{props.options[3]}</span>
                </div>
            </div>
           <br />
        </div>
    );
}

export default MultiSelectConfirm;
