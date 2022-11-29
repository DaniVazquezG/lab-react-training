function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    const secretNumber = `**** **** **** ${number[12]}${number[13]}${number[14]}${number[15]}`

    return (
        <div style={{ backgroundColor: bgColor, color: color }}>
            <h4>{type}</h4>
            <p>{secretNumber}</p>
            <p>{expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>

        </div>
    )
}


export default CreditCard