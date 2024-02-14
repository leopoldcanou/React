import Perks from "./perks";


function Card({ props }) {
    return (
        <ul className="offer-box">
            <li className="offer-box__header">
                <h3 className="offer-box__name">{props.name}</h3>
                <p className="offer-box__price">{props.price}</p>
            </li>
            <li className="offer-box__advantages">
            </li>
            {props.perks.map((perk, index) => (
                <Perks
                    key={index}
                    text={perk.text}
                    checked={perk.checked}
                />
            ))}

            <li><a href="#Forms2" className="header__lien"><button className="header__button btn--hero__nav"> Get
                Started</button></a>
            </li>
        </ul>
    );
}

export default Card;