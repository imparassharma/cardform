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
        const nameDiv = document.getElementById("name");
        const blankName = document.getElementById("blankName");
        blankName.style.display = "block";
        if(event.target.value ==""){
            nameDiv.style.border = "1px solid red";
        }
        else{
            nameDiv.style.border = "1px solid hsl(270, 3%, 87%)";
            blankName.style.display = "none";
        }
        updateName(event.target.value);
    }

    const handleNumber = (event) =>{
        const numberDiv = document.getElementById("cardNumber");
        const blankNumber = document.getElementById("blankNumber");
        const alphabeticRegex = /[A-Za-z]/; 
        if(event.target.value ==""){
            blankNumber.style.display = "block";
            numberDiv.style.border = "1px solid red";
        }
        else{
            blankNumber.style.display = "none";
            let slicedNumber = event.target.value.replace(/ /g, "").replace(/,/g, "");
            const nlength = slicedNumber.length;
            slicedNumber = slicedNumber.match(/.{1,4}/g);
            console.log(alphabeticRegex.test(slicedNumber));
            if(alphabeticRegex.test(slicedNumber)){
                numberDiv.style.border = "1px solid red";
                blankNumber.innerHTML = "Wrong format, numbers only";
                blankNumber.style.display = "block";
            }
            else
            {
                if(nlength==12){
                    console.log("here");
                    flagNumber(true);
                    updateNumber(slicedNumber);
                    numberDiv.style.border = "1px solid hsl(270, 3%, 87%)";
                    blankNumber.style.display = "none";
                }
                else{
                    numberDiv.style.border = "1px solid red";
                    blankNumber.innerHTML = "Wrong format";
                    blankNumber.style.display = "block";
                }
            }
        }

    }
    const handleMonth = (event) =>{
        const monthDiv = document.getElementById("month");
        const blankExp = document.getElementById("blankExp");

        if(event.target.value ==""){
            blankExp.style.display = "block";
            monthDiv.style.border = "1px solid red";
        }
        else{
            blankExp.style.display = "none";
            if(event.target.value>0 && event.target.value<13){     
                flagMonth(true);
                updateMonth(event.target.value);
                monthDiv.style.border = "1px solid hsl(270, 3%, 87%)";
                blankExp.style.display="none";
            }
            else{
                monthDiv.style.border = "1px solid red";
                blankExp.innerHTML = "Wrong format";
                blankExp.style.display="block";
            }
        }
      

    }
    const handleYear = (event) =>{
        const yearDiv = document.getElementById("year");
        const blankExp = document.getElementById("blankExp");
        if(event.target.value=="")
        {
            blankExp.style.display = "block";
            yearDiv.style.border = "1px solid red";
        }
        else{
            blankExp.style.display = "none";
            if(event.target.value>0 && event.target.value<100){
                flagYear(true);
                updateYear(event.target.value);
                yearDiv.style.border = "1px solid hsl(270, 3%, 87%)";
                blankExp.style.display="none";
            }
            else{
                yearDiv.style.border = "1px solid red";
                blankExp.innerHTML = "Wrong format";
                blankExp.style.display="block";
            }
        }

    }
    const handleCvv = (event) =>{
        const cvvDiv = document.getElementById("cvv");
        const blankCvv = document.getElementById("blankCvv");
        if(event.target.value=="")
        {
            blankCvv.style.display = "block";
            cvvDiv.style.border = "1px solid red";
        }
        else
        {
            blankCvv.style.display = "none";
            if(event.target.value>99 && event.target.value<1000){
                flagCvv(true);
                updateCvv(event.target.value);
                cvvDiv.style.border = "1px solid hsl(270, 3%, 87%)";
                blankCvv.style.display = "none";
            }
            else{
                cvvDiv.style.border = "1px solid red";
                blankCvv.innerHTML = "Wrong format";
                blankCvv.style.display = "block";
            }
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

            const theForm = document.getElementById("theForm");
            const confirmed = document.getElementById("confirmed");

            theForm.classList.add("hidden");
            confirmed.classList.remove("hidden");
            confirmed.classList.add("show");
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
                                <input className="inputSection" placeholder="e.g. Jane Appleseed" id="name" onBlur={handleName}></input>
                                <p id="blankName">Can't be blank</p>
                            </div>
                            <div className="row2 row">
                                <label className="label">CARD NUMBER</label>
                                <input className="inputSection" placeholder="e.g. 1234 5678 9123 0000" id="cardNumber" onBlur={handleNumber}></input>
                                <p id="blankNumber">Can't be blank</p>
                            </div>
                            <div className="row3 row">
                                <div className="row3_1 row" >
                                    <label className="label">EXP.DATE (MM/YY)</label>
                                    <div className="inRow">
                                        <input className="inputSection" placeholder="MM" id="month" onBlur={handleMonth}></input>
                                        <input className="inputSection" placeholder="YY" id="year" onBlur={handleYear}></input>
                                    </div>
                                    <p id="blankExp">Can't be blank</p>
                                </div>
                                <div className="row3_2 row">
                                    <label className="label">CVC</label>
                                    <input className="inputSection" placeholder="e.g. 123" id="cvv" onBlur={handleCvv}></input>
                                    <p id="blankCvv">Can't be blank</p>
                                </div>
                            </div>
                            <button className="btn" id="confirm_btn" onClick={handleConfirm}>Confirm</button>
                        </form>
                        <div className="confirmed hidden" id="confirmed">
                            <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
                            <h1>THANK YOU!</h1>
                            <h3>We have added your card details</h3>
                            <button className="btn" id="continue">Continue</button>
                        </div>
                    </div> 
                </div>
            </div>
    );
}

export default Main;