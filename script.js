let billingType = "monthly";


function setBilling(type) {

    billingType = type;

    const monthlyBtn =
        document.getElementById("monthlyBtn");

    const yearlyBtn =
        document.getElementById("yearlyBtn");


    if (type === "monthly") {

        monthlyBtn.classList.add("active");
        yearlyBtn.classList.remove("active");

        document.getElementById("basicPrice").textContent = "999";
        document.getElementById("premiumPrice").textContent = "1,499";
        document.getElementById("elitePrice").textContent = "2,499";

    } else {

        monthlyBtn.classList.remove("active");
        yearlyBtn.classList.add("active");

        document.getElementById("basicPrice").textContent = "799";
        document.getElementById("premiumPrice").textContent = "1,199";
        document.getElementById("elitePrice").textContent = "1,999";
    }
}


function selectPlan(plan) {

    const price = {

        Basic: billingType === "monthly"
            ? "₹999/month"
            : "₹799/month",

        Premium: billingType === "monthly"
            ? "₹1,499/month"
            : "₹1,199/month",

        Elite: billingType === "monthly"
            ? "₹2,499/month"
            : "₹1,999/month"
    };


    alert(
        "You selected the " +
        plan +
        " plan (" +
        price[plan] +
        ")."
    );
}


const form = document.getElementById("enquiryForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const plan = document.getElementById("plan").value;
    const goal = document.getElementById("goal").value;
    const contactTime = document.getElementById("contactTime").value;
    const message = document.getElementById("message").value;

    if (plan === "" || goal === "" || contactTime === "") {
        alert("Please fill in all required fields.");
        return;
    }

    const whatsappMessage =
       "NEW MEMBERSHIP ENQUIRY%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Membership Plan: " + encodeURIComponent(plan) + "%0A" +
        "Fitness Goal: " + encodeURIComponent(goal) + "%0A" +
        "Preferred Contact Time: " + encodeURIComponent(contactTime) + "%0A" +
        "Message: " + encodeURIComponent(message || "No message");

    const gymWhatsAppNumber = "919999999999";

    const whatsappURL =
        "https://wa.me/" + gymWhatsAppNumber +
        "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");

    alert(
        "Thanks, " + name +
        "! Your enquiry has been prepared for WhatsApp."
    );

    form.reset();
});
