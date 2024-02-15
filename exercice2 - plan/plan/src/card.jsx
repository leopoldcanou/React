import Perks from "./perks.jsx";


export default function Card({ label, price, advantages }) {

    return (
        <div className="offer-box">
            <div className="offer-box__header">
                <h3 className="offer-box__name">{label}</h3>
                <p className="offer-box__price">{price}</p>
            </div>
            <ul>
                {advantages.map((item, index) => (
                    <Perks
                        key={index}
                        text={item.text}
                        check={item.check}
                    />
                ))}
            </ul>
            <button className="header__button btn--hero__nav"> Get
                Started</button>
        </div>
    );
}