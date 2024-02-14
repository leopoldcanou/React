import Card from './card.js';


const Starter = {
    name: "Starter Package",
    price: "29 999.99",
    perks: [
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
    ]
};

const Premium = {
    name: "Premium Package",
    price: "35 999.99",
    perks: [
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
            checked: true
        },
        {
            text: "Service de diagnostic à distance",
            checked: true
        },
        {
            text: "Service de remplissage du réservoir",
            checked: true
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
    ]
};

const Prestige = {
    name: "Prestige Package",
    price: "49 999.99",
    perks: [
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
            checked: true
        },
        {
            text: "Service de diagnostic à distance",
            checked: true
        },
        {
            text: "Service de remplissage du réservoir",
            checked: true
        },
        {
            text: "Service de réparation à domicile",
            checked: true
        },
        {
            text: "Entretien régulier",
            checked: true
        },
        {
            text: "Recharge d'hydrogène illimité",
            checked: true
        }
    ]
};



function Offers() {
    return (
        <>
            <Card props={Starter} />
            <Card props={Premium} />
            <Card props={Prestige} />
        </>
    );
}

export default Offers;