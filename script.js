function calculateInstallments() {
  const creditLimit = Number(document.getElementById("credit-limit").value);
  const billTotal = Number(document.getElementById("bill-total").value);

  let installment1, installment2, installment3;

  if (creditLimit / 2 > billTotal / 3) {
    installment1 = billTotal / 3;
    installment2 = billTotal / 3;
    installment3 = billTotal / 3;
  } else {
    installment1 = billTotal - creditLimit;
    installment2 = creditLimit / 2;
    installment3 = creditLimit / 2;
  }

  const installmentsDiv = document.getElementById("installments");
  installmentsDiv.innerHTML = "<h2>Installments:</h2>" +
    "<p>1st Installment: " + installment1.toFixed(2) + "</p>" +
    "<p>2nd Installment: " + installment2.toFixed(2) + "</p>" +
    "<p>3rd Installment: " + installment3.toFixed(2) + "</p>";
}

document.getElementById("calculate-button").addEventListener("click", calculateInstallments);
