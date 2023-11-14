import { useState } from "react";

function Main(){

    const [name,updateName] = useState("");
    const [number,updateNumber] = useState([]);
    const [month,updateMonth] = useState(0);
    const [year,updateYear] = useState(0);
    const [cvv,updateCvv] = useState(0);


    const [isNumber, flagNumber] = useState("false");
    const [isMonth, flagMonth] = useState("false");
    const [isYear, flagYear] = useState("false");
    const [isCvv,flagCvv] = useState("false");
    const handleName = (event) =>{
        updateName(event.target.value);
    }

    const handleNumber = (event) =>{
        let slicedNumber = event.target.value;
        slicedNumber = slicedNumber.match(/.{1,4}/g);
        if(slicedNumber.toString().replace(/,/g,"").length==12){
            flagNumber(true);
            updateNumber(slicedNumber);
        }
    }
    const handleMonth = (event) =>{
        if(event.target.value>0 && event.target.value<13){
            flagMonth(true);
            updateMonth(event.target.value);
        }

    }
    const handleYear = (event) =>{
        if(event.target.value>0 && event.target.value<100){
            flagYear(true);
            updateYear(event.target.value);
        }
    }
    const handleCvv = (event) =>{
        
        if(event.target.value>99 && event.target.value<1000){
            flagCvv(true);
            updateCvv(event.target.value);
        }

    }

    const handleConfirm = (e) =>{
        e.preventDefault();
        const cardNumber  = document.getElementById("cardNumberDisplay");
        const cardName = document.getElementById("nameDisplay");
        const expiry = document.getElementById("expDateDisplay");
        const cardCvv = document.getElementById("cvvDisplay");

        console.log(isNumber);
        console.log(isMonth);
        console.log(isYear);
        console.log(isCvv);
        if(isNumber==true && isMonth==true && isYear==true && isCvv==true){
            cardNumber.innerHTML = number.toString().replace(/,/g," ");
            cardName.innerHTML = name;
            expiry.innerHTML = month +"/"+year;
            cardCvv.innerHTML = cvv;
        }
        else{
            cardName.innerHTML = "somethingWrong";
        }
    }

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
                                <h1 id="cardNumberDisplay">0000 0000 0000 0000</h1>
                            </div>
                            <div className="cardDetails">
                                <p id="nameDisplay">JANE APPLESEED</p>
                                <p id="expDateDisplay">00/00</p>
                            </div>
                        </div>
                        <div className="cardBack">
                            <p id="cvvDisplay">000</p>
                        </div>
                    </div>
                </div>
                <div className="rightSection">
                    <div className="formSection">
                        <form id="theForm">
                            <div className="row1 row">
                                <label className="label">CARDHOLDER NAME</label>
                                <input className="inputSection" placeholder="e.g. Jane Appleseed" id="name" onChange={handleName}></input>
                            </div>
                            <div className="row2 row">
                                <label className="label">CARD NUMBER</label>
                                <input className="inputSection" placeholder="e.g. 1234 5678 9123 0000" id="cardNumber" onChange={handleNumber}></input>
                            </div>
                            <div className="row3 row">
                                <div className="row3_1 row" >
                                    <label className="label">EXP.DATE (MM/YY)</label>
                                    <div className="inRow">
                                        <input className="inputSection" placeholder="MM" id="month" onChange={handleMonth}></input>
                                        <input className="inputSection" placeholder="YY" id="year" onChange={handleYear}></input>
                                    </div>
                                </div>
                                <div className="row3_2 row">
                                    <label className="label">CVC</label>
                                    <input className="inputSection" placeholder="e.g. 123" id="cvv" onChange={handleCvv}></input>
                                </div>
                            </div>
                            <button className="btn" id="confirm_btn" onClick={handleConfirm}>Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default Main;