import React from 'react';
import Team from './team';

import './styles/base.css';


const Employees = [
  {
    id: 0,
    name: "Édouard Jérémie",
    role: "CEO",
    image: "/edouard.jpg",
    altText: "Employé 1"
  },
  {
    id: 1,
    name: "Amélie Christelle",
    role: "Directeur des recherches",
    image: "/amelie.avif",
    altText: "Employé 2"
  },
  {
    id: 2,
    name: "Gilles Damien",
    role: "Directeur commercial",
    image: "gilles.jpg",
    altText: "Employé 3"
  }
];

const newEmployees = [
  {
    id: 3,
    name: "Édouard Jérémie",
    role: "CEO",
    image: "/edouard.jpg",
    altText: "Employé 1"
  },
  {
    id: 4,
    name: "Joe Biden",
    role: "Président des États-Unis",
    image: "https://pbs.twimg.com/media/GGG4YlpWoAAgZ08?format=jpg&name=large",
    altText: "Employé 2"
  },
  {
    id: 5,
    name: "Gilles Damien",
    role: "Directeur commercial",
    image: "gilles.jpg",
    altText: "Employé 3"
  }
];


function App() {
  return (
    <div>
      <Team props={Employees} />
      <Team props={newEmployees} />

    </div>
  );
}

export default App;
