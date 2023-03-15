// export default function Car() {
//     const [carData, setCarData] = useState({})
//     const [loadingState, setLoadingState] = useState("LOADING")
//     const [carId, setCarId] = useState(1)
//     const [currSearch, setCurrSearch] = useState(null)
//     const { id } = useParams()
    

//     useEffect(() => {
//         async function getCarData() {
//             const response = await fetch (`https://my-json-server.typicode.com/Llang8/cars-api/cars/${carId}`)
//             const data = await response.json()
//             // 1 km to Miles = 0.621371
//             // 1 Kilometer per Liter [km/l] = 2.352 Miles per gallon (US) [MPG]
//             // 1 Nm is equal to 0.7376 ft-lbs of torque
//             const carDataUsConversion = {
//                 km_driven: data.km_driven * 0.621371,
//                 mileage: data.mileage * 2.352,

//             }

//             setCarData(data)
//             setLoadingState("LOADED")
//         }
//         getCarData()

//     }, [carId])