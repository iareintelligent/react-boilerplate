import React from "react";
import Option from "./Option";

const Options = props => (
    <div>
        <div className="widget__header">
            <h3 className="my-0">Your Options</h3>
            <button
                className="button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && (
            <p class="widget__message">Please add an option to get started!</p>
        )}
        {props.options.map((option, i) => (
            <Option
                key={option}
                optionText={option}
                count={i + 1}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}
    </div>
);

export default Options;
