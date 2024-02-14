import './App.css'
import Offers from './offers.js';
import './styles/base.css'


function App() {
  return (
    <section>

      <div className="offer">
        <div className="offer-section">
          <h2 className="offer-section__title">Prix et option à l'achat</h2>
          <p className="offer-section__description">Découvrez l'avenir de la mobilité avec des prix compétitifs et des
            options d'achat flexibles chez Auto Innovation.</p>
          <div className="box">
            <Offers />
          </div>
        </div>
      </div>

    </section>
  );
}

export default App;
