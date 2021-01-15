import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";
import { useParams, useLocation, useHistory } from 'react-router-dom';

function CreateSurvey() {
    const [selectType, setSelectType] = useState("Select Question Type");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const { surveyId } = useParams(); 
    const query = useLocation().search;
    const history = useHistory();

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const multiSelect = (e) => setSelectType(() => "Multi-Select");

    const singleSelect = (e) => setSelectType(() => "Single-Select");

    useEffect(() => {
        if(query === "?clear=true") {
            setSelectType("Select Question Type");
            history.replace({
                search: undefined,
            });
        }
    }, [query]);
    
    return ( 
        <>
            <p>Surver ID: {surveyId}</p>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret id="questionType">
                    {selectType}
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem onClick={multiSelect}>Multi-select</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={singleSelect}>Single-select</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            { selectType === "Multi-Select" ? <MultiSelect /> : undefined}
            { selectType === "Single-Select" ? <SingleSelect /> : undefined}
        </>
    );
}

export default CreateSurvey;
