import React from "react";

const Services = () => {
    return (
        <div id="service" className="services">
            <div className="d-flex justify-content-center py-3">
                <h1 className="services-heading">Our Services</h1>
            </div>
      <div className="container services-wrapper">
        
         <div className="item1">
            <h2 className="para_heading">General Sales Agent </h2><br />
                <p>You need professional representation and support to gain traction efficiently in the northeastern US markets. You don’t have time for mediocre service. ImEx Cargo professionals customize GSA operations to your logistics and communication needs.</p>
         </div>

         <div className="item2">
            <h2 className="para_heading">3PL/4PL SERVICE</h2> <br />
            <p>Tailored solutions to accomplish your supply chain goals and remain competitive.</p>
         </div>

         <div className="item3">
            <h2 className="para_heading">GOVERNMENT CONTRACTOR</h2> <br />
            <p>Achieve supplier diversity goals with an approved government contractor for both prime and subprime contracts with multiple certifications.</p>
          </div>

      </div>

    </div>
    )
}

export default Services
