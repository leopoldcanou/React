import React from 'react';

const Perks = (props) => {
    const { text, checked } = props;
    if (checked === true) {
        return (
            <li className="advantage">
                <span className="advantage__checkmark">✓</span>
                <p className="advantage__text">{text}</p>
            </li>
        );
    }
    else if (checked === false) {
        return (
            <li className="advantage">
                <span className="advantage__checkmark">      </span>
                <p className="advantage__text">{text}</p>
            </li>
        );
    }
}

export default Perks;