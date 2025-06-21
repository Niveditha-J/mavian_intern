document.addEventListener("DOMContentLoaded", function () {
  // Scroll Behavior: Sticky Nav + Back To Top
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const backToTop = document.getElementById("back-to-top");
    if (window.scrollY < 50) {
      nav.classList.remove("site-top-nav");
      backToTop.style.display = "none";
    } else {
      nav.classList.add("site-top-nav");
      backToTop.style.display = "block";
    }
  });

  // Shopping Cart Toggle
  const cartButton = document.getElementById("shopping-cart");
  const cartContent = document.getElementById("cart-content");

  cartButton.addEventListener("click", function () {
    if (cartContent.style.display === "block") {
      cartContent.style.display = "none";
    } else {
      cartContent.style.display = "block";
    }
  });

  // Back-To-Top Button
  const backToTop = document.getElementById("back-to-top");
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Delete Cart Item
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-delete")) {
      event.preventDefault();
      const row = event.target.closest("tr");
      if (row) {
        row.remove();
        updateTotal();
      }
    }
  });

  // Update Total
  function updateTotal() {
    let total = 0;
    const rows = document.querySelectorAll("#cart-content tr");

    rows.forEach((row) => {
      const priceCell = row.querySelector("td:nth-child(5)");
      if (priceCell) {
        const price = parseFloat(priceCell.textContent.replace("$", ""));
        if (!isNaN(price)) {
          total += price;
        }
      }
    });

    const totalCell = document.querySelector("#cart-content th:nth-child(5)");
    if (totalCell) {
      totalCell.textContent = "$" + total.toFixed(2);
    }

    const fullTotalCell = document.querySelector(".tbl-full th:nth-child(6)");
    if (fullTotalCell) {
      fullTotalCell.textContent = "$" + total.toFixed(2);
    }
  }
});
