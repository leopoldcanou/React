import React from 'react';
import Card from './card';

function Team({ props }) {
    return (
        <section>
            <header className="team__header">
                <h2 className="team__title">Notre équipe</h2>
            </header>
            <section className="team__content">
                <h1 className="team__heading">Présentation de notre formidable équipe</h1>
                <p className="team__description">Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène.</p>
            </section>
            <ul className="gallery">
                {props.map((employee) => (
                    <li key={employee.id}>
                        <Card
                            imageSrc={employee.image}
                            altText={employee.altText}
                            name={employee.name}
                            role={employee.role}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Team;
