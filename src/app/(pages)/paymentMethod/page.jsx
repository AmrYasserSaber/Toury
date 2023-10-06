import React from "react";

function paymentPage() {
    return (
        <div>
            <nav className="bg-gray-100 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a className="flex items-center" href="#">
                        <img
                            src="imgs/Blue and Yellow Elegant Modern className Academy Logo (1) 1.png"
                            width="50px"
                            alt="Logo"
                            loading="lazy"
                            style={{marginTop: "-1px"}}
                        />
                    </a>
                    <button
                        className="block lg:hidden border border-gray-300 px-2 py-1 rounded-md text-gray-700"
                        type="button"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="hidden lg:flex lg:flex-grow lg:items-center lg:justify-end"
                         id="navbarRightAlignExample">
                        <ul className="flex items-center list-none m-0 p-0">
                            <li className="nav-item home">
                                <a className="nav-link" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item ml-5">
                                <a className="nav-link explor" href="#">
                                    Exploring
                                </a>
                            </li>
                            <li className="nav-item ml-5">
                                <a className="nav-link news" href="#">
                                    News
                                </a>
                            </li>
                            <li className="nav-item ml-5">
                                <a className="nav-link contact" href="#">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto py-8">
                <div className="row">
                    <div className="col-md-12 bg-gray-200 rounded p-4 mb-4 flex items-center">
                        <i className="fa-solid fa-chevron-left chevr"></i>
                        <span>Back</span>
                        <h3 className="ml-auto">Choose payment method</h3>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="col-md-3 mt-3 Credit flex items-center">
                        <img src="imgs/Vector(4).png" width="20px" alt="Credit Card"/>
                        <span>Credit card</span>
                    </div>
                    <div className="col-md-3 mt-3 Paypal flex items-center">
                        <img src="imgs/paypal 1.png" width="20px" alt="Paypal"/>
                        <span>Paypal</span>
                    </div>
                    <div className="col-md-3 mt-3 American flex items-center">
                        <img src="imgs/american-express 1.png" width="25px" alt="American Express"/>
                        <span>American Express</span>
                    </div>
                    <div className="col-md-3 mt-3 Crypto flex items-center">
                        <img src="imgs/Vector(5).png" width="15px" alt="Crypto"/>
                        <span>Crypto</span>
                    </div>
                </div>

                <div className="flex">
                    <div className="col-md-6 Payment">
                        <h5 className="mb-4">Payment info</h5>

                        <form className="form">
                            <div className="name">
                                <label className="on">Name On Card</label>
                                <input type="text" className="text" name="text"/>
                            </div>
                            <br/>
                            <div className="cv">
                                <label className="cvv">CVV</label>
                                <input type="text" className="textt" name="text"/>
                            </div>
                        </form>

                        <form className="form">
                            <div className="name">
                                <label className="on">Card Number</label>
                                <input type="text" className="text" name="text"/>
                            </div>
                            <br/>
                            <div className="ccv">
                                <label className="cvv">Expiry date</label>
                                <input type="text" className="textt" name="text"/>
                                <img src="imgs/Vector(2).png" width="15" className="vector" alt="Calendar"/>
                            </div>

                            <button type="button" className="btn play">
                                Pay Now
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6 Review">
                        <h3 className="mb-4">Review</h3>
                        <img src="imgs/Frame 225.png" className="mt-2" width="380px" alt="Review"/>
                    </div>
                </div>
            </div>

            <div className="container-fluied foot bg-gray-100 py-8">
                {/*... Rest of your footer code ...*/}
            </div>
        </div>
    );
}

export default paymentPage;