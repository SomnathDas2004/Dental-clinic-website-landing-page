
  document.getElementById("consultationForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      fullName: document.getElementById("fullName").value,
      interest: document.getElementById("interest").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzPfh2Q2sIBUetpad_zhSemz6rIB4lzcCInw-FpaF_v1tPsX1WrR9wjvrOYeEn0WsjU/exec", {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script without response
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      document.getElementById("responseMsg").textContent = "Form submitted successfully!";
      document.getElementById("consultationForm").reset();
    } catch (error) {
      document.getElementById("responseMsg").textContent = "Error submitting form.";
      console.error(error);
    }
  });

