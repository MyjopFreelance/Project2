document.getElementById("calculate").addEventListener("click", () => {
  const quantity = Number(document.getElementById("quantity").value);
  const price = Number(document.getElementById("price").value);
  const total = quantity * price;
  document.getElementById("total").textContent = total;
});
