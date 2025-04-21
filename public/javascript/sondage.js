const form = document.getElementById("sondage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const newData = [
    [data.age , data.revenu , data.q0 ,data.q1, data.q2, data.q3, data.q4, data.q5, data.q6, data.q7 , data.q8],
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
