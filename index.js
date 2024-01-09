
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
    constructor() {
        super();
        this.pincode = this.querySelector('input');
        this.result = this.querySelector('#result');
        this.button = this.querySelector('button');

        this.button.addEventListener("click", this.checkPincode.bind(this))


    }

    checkPincode() {
       
        if (this.pincode.value.length !== 6) {
            this.result.textContent = "Pincode should be 6 digits";
        } else {
            const details = data.deliveryLocations.filter((each) => each.pincode === this.pincode.value);

            if (details.length > 0) {
                const estimatedDeliveryDays = details[0].estimatedDeliveryDays;
                const currentDate = new Date();
                const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + estimatedDeliveryDays));

                this.result.textContent = `Estimated Delivery Days: ${estimatedDeliveryDays}, Delivery Date: ${deliveryDate.toDateString()}`;
            } else {
                this.result.textContent = "Enter a valid pincode";
            }
        }

        this.pincode.value = ""
    }


}


// Register the PincodeChecker custom element
customElements.define('pincode-checker', PincodeChecker);