import Perks from "./perks";


const Perks1 = [
    {
        text: "Assurance auto complémentaire",
        checked: true
    },
    {
        text: "Première recharge offerte",
        checked: true
    },
    {
        text: "Assurance contre le vol",
        checked: true
    },
    {
        text: "Service de rappel d'entretien",
        checked: true
    },
    {
        text: "Nettoyage hebdomadaire",
        checked: false
    },
    {
        text: "Service de diagnostic à distance",
        checked: false
    },
    {
        text: "Service de remplissage du réservoir",
        checked: false
    },
    {
        text: "Service de réparation à domicile",
        checked: false
    },
    {
        text: "Entretien régulier",
        checked: false
    },
    {
        text: "Recharge d'hydrogène illimité",
        checked: false
    }
];



function Card(props) {
    return (
        <ul className="offer-box">
            <li className="offer-box__header">
                <h3 className="offer-box__name">Starter Package</h3>
                <p className="offer-box__price">29 999.99</p>
            </li>
            <li className="offer-box__advantages">
            </li>
            <Perks />

            <li><a href="#Forms2" className="header__lien"><button className="header__button btn--hero__nav"> Get
                Started</button></a>
            </li>
        </ul>
    );
}

export default Card;