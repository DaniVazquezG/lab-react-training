import Rating from "./Rating";

const DriverCard = ({ name, rating, img, car }) => {
    return (
        <div className="drivercard-container">
            <p>{name}</p>
            <Rating>{rating}</Rating>
            <img src={img} alt="coche"></img>



        </div>
    )



}


export default DriverCard
