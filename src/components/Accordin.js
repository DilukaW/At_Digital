import React, { useState } from 'react';

const Accordin = () => {
    const [accordions, setAccordions] = useState([
        { heading: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?", body: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." },
        { heading: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?", body: "This is the second item's accordion body." },
        { heading: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?", body: "This is the second item's accordion body." },
        ,

    ]);

    return (
        <div className="accordion mb-5" id="accordionPanelsStayOpenExample">
            {accordions.map((accordion, index) => (
                <div className="accordion-item " key={index} >
                    <h2 className="accordion-header fw-bold" id={`panelsStayOpen-heading${index}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${index}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${index}`}>
                            {accordion.heading}
                        </button>
                    </h2>
                    <div id={`panelsStayOpen-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${index}`}>
                        <div className="accordion-body">
                            <p>{accordion.body}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordin;
