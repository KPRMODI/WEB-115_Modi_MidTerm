let button1 = document.getElementById("Button1")


button1.addEventListener("click", function(){
    let loanAmount = window.prompt("Enter loan amount: ")
    let downPayment = window.prompt("Enter down payment as a percentage (0-100): ")
    let downpaymentamount = loanAmount * (downPayment / 100)
    let interestRate = 0.0575
    let termYears = window.prompt("Enter term years (30 or 15)")

    let PrincipalLoanAmount = loanAmount - (downPayment * loanAmount)
    PrincipalLoanAmount1 = document.createElement("p")
    PrincipalLoanAmount1.textContent = "principle loan amount " + PrincipalLoanAmount
    document.getElementById("finance").appendChild(PrincipalLoanAmount1)

    interestRate1 = document.createElement("p")

    let monthlypayment = (((interestRate / 12) * loanAmount) / (1 - Math.pow(1 + (interestRate / 12), (termYears * -12)))) 

    monthlypaymentshow = document.createElement("p")
    monthlypaymentshow.textContent = "Monthly Payment each month " + monthlypayment
    document.getElementById("finance").appendChild(monthlypaymentshow)

    let totalInterest = (monthlypayment * termYears * 12) - loanAmount
    totalInterestshow = document.createElement("p")
    totalInterestshow.textContent = "total interest each month " + totalInterest
    document.getElementById("finance").appendChild(totalInterestshow)

    let mortageamount = loanAmount + totalInterest
    mortageamountshow = document.createElement("p")
    mortageamountshow.textContent = "mortage amount each month " + mortageamount
    document.getElementById("finance").appendChild(mortageamountshow)

    let Monthlyloanbalance = mortageamount - monthlypayment
    monthlyloanbalanceshow = document.createElement("p")
    monthlyloanbalanceshow.textContent = "monthly loan balance each month " + Monthlyloanbalance.toFixed(2)
    document.getElementById("finance").appendChild(monthlyloanbalanceshow)

    i = 1;
    while (loanAmount > 0){
        loanAmount -= monthlypayment
        loanamountshow = document.createElement("p")
        loanamountshow.textContent = "Month "+ i+" loan balance each month :" + loanAmount.toFixed(2)
        document.getElementById("finance").appendChild(loanamountshow)
        i ++
    }

})

