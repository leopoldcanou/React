import './App.css'
import Offers from './offers.jsx';
import './styles/base.css'






function App() {


  let data = {
    title: "Prix et option à l'achat",
    description: "Découvrez l'avenir de la mobilité avec des prix compétitifs et des options d'achat flexibles chez Auto Innovation.",
    plans: [
      {
        name: "Starter Package",
        price:
        {
          buy: "19 999.99",
          leasing: "299.99"
        },
        advantages: [
          {
            text: "Assurance auto complémentaire",
            check: true
          },
          {
            text: "Première recharge offerte",
            check: true
          },
          {
            text: "Assurance contre le vol",
            check: true
          },
          {
            text: "Service de rappel d'entretien",
            check: true
          },
          {
            text: "Nettoyage hebdomadaire",
            check: false
          },
          {
            text: "Service de diagnostic à distance",
            check: false
          },
          {
            text: "Service de remplissage du réservoir",
            check: false
          },
          {
            text: "Service de réparation à domicile",
            check: false
          },
          {
            text: "Entretien régulier",
            check: false
          },
          {
            text: "Recharge d'hydrogène illimité",
            check: false
          }
        ]
      },
      {
        name: "Premium Package",
        price:
        {
          buy: "35 999.99",
          leasing: "499.99"
        },
        advantages: [
          {
            text: "Assurance auto complémentaire",
            check: true
          },
          {
            text: "Première recharge offerte",
            check: true
          },
          {
            text: "Assurance contre le vol",
            check: true
          },
          {
            text: "Service de rappel d'entretien",
            check: true
          },
          {
            text: "Nettoyage hebdomadaire",
            check: true
          },
          {
            text: "Service de diagnostic à distance",
            check: true
          },
          {
            text: "Service de remplissage du réservoir",
            check: true
          },
          {
            text: "Service de réparation à domicile",
            check: false
          },
          {
            text: "Entretien régulier",
            check: false
          },
          {
            text: "Recharge d'hydrogène illimité",
            check: false
          }
        ]
      },
      {
        name: "Prestige Package",
        price:
        {
          buy: "49 999.99",
          leasing: "699.99"
        },
        advantages: [
          {
            text: "Assurance auto complémentaire",
            check: true
          },
          {
            text: "Première recharge offerte",
            check: true
          },
          {
            text: "Assurance contre le vol",
            check: true
          },
          {
            text: "Service de rappel d'entretien",
            check: true
          },
          {
            text: "Nettoyage hebdomadaire",
            check: true
          },
          {
            text: "Service de diagnostic à distance",
            check: true
          },
          {
            text: "Service de remplissage du réservoir",
            check: true
          },
          {
            text: "Service de réparation à domicile",
            check: true
          },
          {
            text: "Entretien régulier",
            check: true
          },
          {
            text: "Recharge d'hydrogène illimité",
            check: true
          }
        ]
      }
    ]
  }


  let cb_buy = function () {
    alert("Vous avez sélectionné le plan d'achat");
  }

  return (
    <section>
      <Offers {...data} cb_buy={cb_buy} />
    </section>
  );
}

export default App;
