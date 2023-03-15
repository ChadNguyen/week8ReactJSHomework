import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cars from './Cars'
import NotFound404 from './NotFound404'

export default function SingleCarData() {
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [error, setError] = useState(false)
    
    useEffect(() => {
        async function getCar() {
            try {
                const response = await fetch (`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
                const data = await response.json()
                setCar(data)
            } catch (error) {
                console.log(error)
                setError(true)
            }
        }
        getCar()
    }, [id])

    if (error) {
        return <NotFound404 />
    }

    return (
        <div>
            <h2>{car.name}</h2>
            <p>ID: {car.id}</p>
            <p>Year: {car.year}</p>
            <p>Selling Price: {car.selling_price}</p>
            <p>Miles Driven: {car.km_driven}</p>
            <p>Fuel: {car.fuel}</p>
            <p>Seller Type: {car.seller_type}</p>
            <p>Transmission: {car.transmission}</p>
            <p>Owner: {car.owner}</p>
            <p>Mileage: {car.mileage}</p>
            <p>Engine: {car.engine}</p>
            <p>Max Power: {car.max_power}</p>
            <p>Torque: {car.torque}</p>
            <p>Seats: {car.seats}</p>
        </div>     
    )
}
