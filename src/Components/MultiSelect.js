import React, { useState, useEffect } from "react";

import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

function MultiSelect() {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([""]);

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleOptionsChange = (e, index) => {
        options[index] = e.target.value;
        setOptions(() => [...options]);
    }

    const addOption = (index) => {
        if(options.length < 4) {
            options.splice(index + 1, 0, "");
            setOptions([...options]);
        }
    };

    const removeOption = (index) => {
        if(options.length > 1) {
            options.splice(index, 1);
            setOptions([...options]);
        }
    };

    const disableButtons = () => {
        if(question.trim() === "") {
            return true;
        }

        if(options.find(((item) => item.trim() === "")) !== undefined) {
            return true;
        }
    
        return false;
    }

    return (
        <div className="question-container">
            <InputGroup className="input-group">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>?</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Enter Question" value={question} onChange={handleQuestionChange} />
            </InputGroup>
            <span className="option-text">Options <span className="option-text-optional">(Please enter all 4 options. Click + to add question)</span></span>
            <br />
            {
                options.map((item, index) => (
                    <InputGroup key={index} className="input-group">
                        <Input placeholder={`Type answer here ${index}`} onChange={(e) => handleOptionsChange(e, index)} value={`${options[index]}`} />
                        <InputGroupAddon addonType="append">
                            <InputGroupText onClick={() => addOption(index)}>+</InputGroupText>
                            <InputGroupText onClick={() => removeOption(index)}>-</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                ))
            }
            <br />
            { 
                options.length === 4 ? (
                    <div className="finish-buttons">
                        <Button className="btn left" disabled={disableButtons()}>Add Question</Button>
                        <Button className="btn left" disabled={disableButtons()}>Publish</Button>
                    </div>
                ) : undefined
            }
        </div>
    );
}

export default MultiSelect;


/* 
<InputGroup className="input-group">
    <Input placeholder="Option 2" />
    <InputGroupAddon addonType="append">
    <InputGroupText>+</InputGroupText>
    <InputGroupText>-</InputGroupText>
    </InputGroupAddon>
</InputGroup>
<InputGroup className="input-group">
    <Input placeholder="Option 3" />
    <InputGroupAddon addonType="append">
    <InputGroupText>+</InputGroupText>
    <InputGroupText>-</InputGroupText>
    </InputGroupAddon>
</InputGroup>
<InputGroup className="input-group">
    <Input placeholder="Option 4" />
    <InputGroupAddon addonType="append">
    <InputGroupText>+</InputGroupText>
    <InputGroupText>-</InputGroupText>
    </InputGroupAddon>
</InputGroup> 
*/