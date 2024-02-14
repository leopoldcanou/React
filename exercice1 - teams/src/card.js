import React from 'react';

const Card = (props) => {
    const { imageSrc, altText, name, role } = props;

    return (
        <section className="gallery__pic">
            <img src={imageSrc} alt={altText} className="gallery__image" />
            <div className="gallery__div">
                <img src="/bgshapes.svg" alt='pfp' />
                <div className="gallery__txt">
                    <h2>{name}</h2>
                    <h3 className="gallery__work">{role}</h3>
                </div>
            </div>
        </section>
    );
};

export default Card;