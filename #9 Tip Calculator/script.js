const calculateTip = () => {
    let billamt = document.getElementById("billamt").value;
    let serviceQual = document.getElementById("service").value;
    let guests = document.getElementById("guestamt").value;


    let tip = Math.floor(((billamt) * (serviceQual)) / (guests));
    console.log(tip);


    document.getElementById("billamt").value = "";
    document.getElementById("guestamt").value = "";
    console.log("tip is calculated");


    showCustomAlert(`Tip amount per guest: $${tip}`);
};

const showCustomAlert = (message) => {
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";

    alertBox.innerHTML = `
        <div class="custom-alert-content">
            <h2>Tip Calculator</h2>
            <p>${message}</p>
            <button id="closeAlert">Close</button>
        </div>
    `;

    document.body.appendChild(alertBox);


    document.getElementById("closeAlert").addEventListener("click", () => {
        alertBox.remove();
    });
};
