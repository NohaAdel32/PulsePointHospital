import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import './style/LaboratoryShow.css';

export function LaboratoryShow({ initialCount, DummyLaboratory, title }) {
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const handleSeeMore = () => {
        setVisibleCount(DummyLaboratory.length);
    };

    return (
        <section className="laboratory-section">
            <div className="laboratory-container">
                <h2 className="laboratory-title">{title}</h2>
                <div className="laboratory-grid">
                    {DummyLaboratory.slice(0, visibleCount).map((lab) => (
                        <Fade key={lab.id} cascade damping={0.1} direction="up" triggerOnce>
                            <div className="laboratory-card">
                                <div className="laboratory-image">
                                    <img src={lab.image} alt={lab.name} />
                                </div>
                                <div className="laboratory-details">
                                    <h3>{lab.name}</h3>
                                    <p>{lab.description}</p>
                                    <p className="laboratory-price">Price: ${lab.price}</p>
                                    <Link
                                        to="/laboratory#laboratory-form"
                                        state={{ testType: lab.name }}
                                        className="book-button"
                                    >
                                        Book Test
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
                {visibleCount < DummyLaboratory.length && (
                    <div className="see-more-container">
                        <button onClick={handleSeeMore} className="see-more-button">
                            See More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}