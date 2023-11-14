function Main(){


    return(
            <div className="mainSection">
                <div className="leftSection">
                    <div className="cardSection">
                        <div className="cardFront">
                            <div className="profile">
                                <div className="circle1"></div>
                                <div className="circle2"></div>
                            </div>
                            <div className="cardNumber">
                                <h1>0000 0000 0000 0000</h1>
                            </div>
                            <div className="cardDetails">
                                <p>JANE APPLESEED</p>
                                <p>00/00</p>
                            </div>
                        </div>
                        <div className="cardBack">
                            <p>000</p>
                        </div>
                    </div>
                </div>
                <div className="rightSection">
                    <div className="formSection">
                        <form id="theForm">
                            <div className="row1 row">
                                <label className="label">CARDHOLDER NAME</label>
                                <input className="inputSection" placeholder="e.g. Jane Appleseed"></input>
                            </div>
                            <div className="row2 row">
                                <label className="label">CARD NUMBER</label>
                                <input className="inputSection" placeholder="e.g. 1234 5678 9123 0000"></input>
                            </div>
                            <div className="row3 row">
                                <div className="row3_1 row" >
                                    <label className="label">EXP.DATE (MM/YY)</label>
                                    <div className="inRow">
                                        <input className="inputSection" placeholder="MM"></input>
                                        <input className="inputSection" placeholder="YY"></input>
                                    </div>
                                </div>
                                <div className="row3_2 row">
                                    <label className="label">CVC</label>
                                    <input className="inputSection" placeholder="e.g. 123"></input>
                                </div>
                            </div>
                            <button className="btn" id="confirm_btn">Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default Main;