import Card from './card.jsx';
import { useState } from 'react';

export default function Offers({ title, description, plans, cb_buy }) {
    const [inputChecked, setInputChecked] = useState(false);

    const handleInputChange = () => {
        setInputChecked(!inputChecked);
    };

    return (
        <div className='offer'>
            <div className='offer-section'>
                <h2 className='offer-section__title'>{title}</h2>
                <p className='offer-section__description'>{description}</p>
                <div className='offer-section__description'>
                    <label className="switch">
                        <input onClick={handleInputChange} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className='box'>
                    {plans.map((plan, index) => {

                        return (
                            <Card
                                key={index}
                                label={plan.name}
                                price={inputChecked ? plan.price.leasing : plan.price.buy}
                                advantages={plan.advantages}
                                handler={cb_buy}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
