import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
            <div className="col-full">
                    <h1 className="myname mb-2">Welcome to Imex Cargo</h1>

                </div>

                <div className="grid-container">
                    <div>
                        <p>Airline Cargo Partner<br />
                            GSA/GSSA<br />
                            New England, New York, <br />
                            New Jersey & Philadelphia </p>
                    </div>
                    <div>
                        <p>Government Contractor<br />
                            Supplier Diversity for<br />
                            Local, National & Global<br />
                            Supply Chain Logistics</p>
                    </div>
                    <div>
                        <p>3PL/4PL Custom Supply<br />
                            Chain Logistics Solutions<br />
                            to Move Business Forward</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
