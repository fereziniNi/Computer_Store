import React from "react";
import "./RadioGroup.css";

const RadioGroup = ({ label, isAlter }) => {
    return (
        <div className="radio-group">
            <label className="radio-label">{label}</label>
            <div className="radio-options">
                <label className="radio-option">
                    <input type="radio" name="condition" value="Usado" onChange={(e) => isAlter(e.target.value)} />
                    Usado
                </label>
                <label className="radio-option">
                    <input type="radio" name="condition" value="Novo" onChange={(e) => isAlter(e.target.value)} />
                    Novo
                </label>
            </div>
        </div>
    );
};

export default RadioGroup;
