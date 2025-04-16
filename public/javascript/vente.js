const form = document.getElementById("surveyForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const newData = [
    data.product,
    data.quantity,
    data.purchaseDate,
    data.priceBefore,
    data.priceAfter,
    data.promotionType,
    data.gender,
    data.age,
    data.revenu,
  ];
  try {
    const response = await fetch("/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit data");
    }

    console.log("Data submitted successfully");
  } catch (error) {
    console.error("Error:", error);
  }

  form.reset();
});
