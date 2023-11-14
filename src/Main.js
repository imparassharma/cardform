function Main(){


    return(
        <div>
            <div className="mainSection">
                <div className="leftSection">

                </div>
                <div className="rightSection">
                    <div className="formSection">
                        <form id="theForm">
                            <div className="row1 row">
                            <div>hehehes</div>
                                <label className="label">CARDHOLDER NAME</label>
                                <input className="inputSection"></input>
                            </div>
                            <div className="row2 row">
                                <label className="label">CARD NUMBER</label>
                                <input className="inputSection"></input>
                            </div>
                            <div className="row3 row">
                                <div className="row3_1 row" >
                                    <label className="label">EXP.DATE (MM/YY)</label>
                                    <div className="inRow">
                                        <input className="inputSection"></input>
                                        <input className="inputSection"></input>
                                    </div>
                                </div>
                                <div className="row3_2 row">
                                    <label className="label">CVC</label>
                                    <input className="inputSection"></input>
                                </div>
                            </div>
                            <button className="btn" id="confirm_btn">CONFIRM</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;