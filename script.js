function calculatePrice() {
    const service = document.getElementById('service').value;
    const units = document.getElementById('units').value;

    let pricePerThousandUnits;

    switch(service) {
        case 'followers':
            pricePerThousandUnits = 280; // Price per 1000 units for Followers [Premium]
            break;
        case 'likes':
            pricePerThousandUnits = 17; // Price per 1000 units for Likes [Like toh me karta tha ussey :( woh bhi premium]
            break;
        case 'views':
            pricePerThousandUnits = 9; // Price per 1000 units for Views [Value For Money]
            break;
        default:
            pricePerThousandUnits = 0;
    }

    const totalPrice = (units / 1000) * pricePerThousandUnits;
    const roundedTotalPrice = Math.ceil(totalPrice);
    document.getElementById('result').innerText = `Total Price: ₹${roundedTotalPrice}`;
}
