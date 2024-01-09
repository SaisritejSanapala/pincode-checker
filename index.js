
const data = {
    "deliveryLocations": [
        {
            "pincode": "110001",
            "estimatedDeliveryDays": 2,
            "locationName": "Connaught Place, Delhi"
        },
        {
            "pincode": "400001",
            "estimatedDeliveryDays": 3,
            "locationName": "Fort, Mumbai"
        },
        {
            "pincode": "700001",
            "estimatedDeliveryDays": 4,
            "locationName": "Dalhousie Square, Kolkata"
        },
        {
            "pincode": "600001",
            "estimatedDeliveryDays": 3,
            "locationName": "Parrys Corner, Chennai"
        },
        {
            "pincode": "500001",
            "estimatedDeliveryDays": 2,
            "locationName": "Afzal Gunj, Hyderabad"
        },
        {
            "pincode": "110020",
            "estimatedDeliveryDays": 5,
            "locationName": "Hauz Khas, Delhi"
        },
        {
            "pincode": "400020",
            "estimatedDeliveryDays": 4,
            "locationName": "Worli, Mumbai"
        },
        {
            "pincode": "700020",
            "estimatedDeliveryDays": 3,
            "locationName": "Salt Lake City, Kolkata"
        },
        {
            "pincode": "600020",
            "estimatedDeliveryDays": 2,
            "locationName": "Anna Nagar, Chennai"
        },
        {
            "pincode": "500020",
            "estimatedDeliveryDays": 4,
            "locationName": "Banjara Hills, Hyderabad"
        }
    ]
}

class PincodeChecker extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form id="pincodeForm">
                <label for="pincode">Enter Pincode:</label>
                <input type="number" id="pincode" name="pincode" required>
                <button type="button" onclick="checkPincode()">Check Pincode</button>
            </form>
            <div > <p id="result"></p></div>
        `;
    }
}

// Define the checkPincode function
function checkPincode() {
    let result = document.getElementById("result");
    let pincode = document.getElementById('pincode').value;

    if (pincode.length !== 6) {
        result.innerText = "Pincode should be 6 digits";
    } else {
        const details = data.deliveryLocations.filter((each) => each.pincode === pincode);

        if (details.length > 0) {
            const estimatedDeliveryDays = details[0].estimatedDeliveryDays;
            const currentDate = new Date();
            const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + estimatedDeliveryDays));

            result.innerText = `Estimated Delivery Days: ${estimatedDeliveryDays}, Delivery Date: ${deliveryDate.toDateString()}`;
        } else {
            result.innerText = "Enter a valid pincode";
        }
    }

    document.getElementById('pincode').value = ""
}

// Register the PincodeChecker custom element
customElements.define('pincode-checker', PincodeChecker);