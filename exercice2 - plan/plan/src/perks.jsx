import React from 'react';

const Perks = ({ text, check }) => {
    let checkmark = check ? "✓" : "\u00A0\u00A0\u00A0";

    return (
        <li className="advantage">
            <span className="advantage__checkmark">{checkmark}</span>
            <p className="advantage__text">{text}</p>
        </li>
    );

}

export default Perks;