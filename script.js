const creditLimitInput = document.getElementById("credit-limit");
const billTotalInput = document.getElementById("bill-total");
const installment1Output = document.getElementById("installment1");
const installment2Output = document.getElementById("installment2");
const installment3Output = document.getElementById("installment3");

creditLimitInput.addEventListener("input", calculateInstallments);
billTotalInput.addEventListener("input", calculateInstallments);

function calculateInstallments() {
  const creditLimit = Number(creditLimitInput.value);
  const billTotal = Number(billTotalInput.value);

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

  installment1Output.textContent = installment1.toFixed(2);
  installment2Output.textContent = installment2.toFixed(2);
  installment3Output.textContent = installment3.toFixed(2);
}
