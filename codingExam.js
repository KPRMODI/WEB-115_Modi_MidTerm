let button1 = document.getElementById("Button1")


button1.addEventListener("click", function(){
    let loanAmount = window.prompt("Enter loan amount: ")
    let downPayment = window.prompt("Enter down payment as a percentage (0-100): ")
    let downpaymentamount = loanAmount * (downPayment / 100)
    let interestRate = 0.07
    let termYears = window.prompt("Enter term years (30 or 15)")

    let monthlypayment = (((interestRate / 12) * loanAmount) / (1 - Math.pow(1 + (interestRate / 12), (termYears * -12)))) 
    monthlypaymentshow = document.createElement("p")
    monthlypaymentshow.textContent = "Monthly Payment each month " + monthlypayment
    document.getElementById("lol").appendChild(monthlypaymentshow)

    let totalInterest = (monthlypayment * termYears * 12) - loanAmount
    totalInterestshow = document.createElement("p")
    totalInterestshow.textContent = "total interest each month " + totalInterest
    document.getElementById("lol").appendChild(totalInterestshow)

    let mortageamount = loanAmount + totalInterest
    mortageamountshow = document.createElement("p")
    mortageamountshow.textContent = "mortage amount each month " + mortageamount
    document.getElementById("lol").appendChild(mortageamountshow)

    let Monthlyloanbalance = mortageamount - monthlypayment
    monthlyloanbalanceshow = document.createElement("p")
    monthlyloanbalanceshow.textContent = "monthly loan balance each month " + Monthlyloanbalance
    document.getElementById("lol").appendChild(monthlyloanbalanceshow)

    while (loanAmount > 0){
        loanAmount -= monthlypayment
        loanamountshow = document.createElement()
    }

})

