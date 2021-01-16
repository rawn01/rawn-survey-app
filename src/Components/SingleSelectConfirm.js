import React from "react";

function SingleSelectConfirm(props) {
    return ( 
        <div className="confirm-container">
           <h6>{props.index + 1}. {props.question}</h6>

           <div className="confirm-single">
               <div className="confirm-single-left">
                    <input type="radio" />
                    <div className="confirm-text">{props.options[0]}</div>
                </div>

                <div className="confirm-single-right">
                    <input type="radio" />
                    <div className="confirm-text">{props.options[1]}</div>
                </div>
            </div>
           <br />
        </div>
    );
}

export default SingleSelectConfirm;
