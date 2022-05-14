import { useState } from "react"
import MaterialIcon from "./materialIcon"
import CONTACTS from "../pages/api/contacts"

const Options = {
    2: {
        numberOfPax: 2,
        options: [
            ["ground-floor-master-bedroom"],
            ["top-floor-master-bedroom"]
        ]
    },
    3: {
        numberOfPax: 3,
        options: [
            ["top-floor-master-bedroom"],
            ["top-floor-master-bedroom", "top-floor-second-bedroom"]
        ]
    },
    4: {
        numberOfPax: 4,
        options: [
            ["top-floor-master-bedroom", "top-floor-second-bedroom"],
            ["top-floor-master-bedroom", "ground-floor-master-bedroom"],
        ]
    },
    6: {
        numberOfPax: 6,
        options: [
            ["ground-floor-master-bedroom", "top-floor-master-bedroom", "top-floor-second-bedroom"]
        ]
    },
}
export const Rooms = {
    "ground-floor-master-bedroom": {
        label: "Master bedroom on the ground floor",
        amenities: [
            <MaterialIcon key="bed" icon="bed" desc="King size bed" />,
            <MaterialIcon key="ac_unit" icon="ac_unit" desc="Air Conditioned" />,
            <MaterialIcon key="bathroom" icon="bathroom" desc="Attached bathroom and toilet" />,
            <MaterialIcon key="connected_tv" icon="connected_tv" desc="TV with Amazon Fire TV" />,
        ],
        rate: 2100,
        max: 2,
        extraLimit: 0
    },
    "top-floor-master-bedroom": {
        label: "Master bedroom on the top floor",
        amenities: [
            <MaterialIcon key="bed" icon="bed" desc="Queen size bed" />,
            <MaterialIcon key="ac_unit" icon="ac_unit" desc="Air Conditioned" />,
            <MaterialIcon key="bathroom" icon="bathroom" desc="Attached bathroom and toilet" />,
            <MaterialIcon key="connected_tv" icon="connected_tv" desc="TV with Amazon Fire TV" />,
        ],
        rate: 2100,
        max: 2,
        extraLimit: 1
    },
    "top-floor-second-bedroom": {
        label: "Second bedroom on the top floor",
        amenities: [
            <MaterialIcon key="bed" icon="bed" desc="2 single beds" />,
            <MaterialIcon key="info" icon="info" desc="No A/C, No attached bathroom" />
        ],
        rate: 700,
        max: 2,
        extraLimit: 2
    }
}

const RoomExtra = {
    rate: 700
}

const ShowOption = ({ option, index, nights, pax }) => {
    let rent = 0
    let maxPax = 0
    option.forEach(o => {
        rent += Rooms[o].rate
        maxPax += Rooms[o].max
    })
    const extraPax = Math.max(0, pax - maxPax)
    return (
        <div className="me-2">
            <h4>Option {index + 1}</h4>
            <strong>Rooms</strong><br/>
            {option.map(o => (
                <>
                {Rooms[o].label}<br/>
                </>
            ))}
            <br />
            <div>
                
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div><strong>Room fee</strong></div>
                        <div>&#8377; {rent} X {nights} nights </div>
                    </div>
                    {
                        extraPax ? (
                            <div className="d-flex justify-content-between align-items-center">
                                <div><strong>Extra person</strong></div>
                                <div>&#8377; {RoomExtra.rate} X {extraPax} X {nights} nights</div>
                            </div>
                        ) : null
                    }
                </div>
                <hr/>
                <div className="d-flex align-items-center justify-content-between">
                    <div>Total</div>
                    <div className="me-2">&#8377; {(rent + extraPax * RoomExtra.rate) * nights}</div>
                </div>
            </div>
        </div>
    )
}

const BookingOptions = () => {
    const [numberOfPax, setNumberOfPax] = useState(2)
    const [checkInDate, setCheckInDate] = useState()
    const [checkOutDate, setCheckOutDate] = useState()

    const onBooking = () => {
        const text = `Hello, I would like to book rooms for ${numberOfPax}. 
        Check-in: ${checkInDateObject.toDateString()}. Check-out: ${checkInDateObject.toDateString()}`
        window.open(`https://wa.me/${CONTACTS.phoneNumbers[0].replace("+", "").replace("-", "")}?text=${text}`)
    }

    const checkInDateObject = new Date(checkInDate)
    const checkOutDateObject = new Date(checkOutDate)
    const dateDiff = checkInDateObject && checkOutDateObject && ((checkOutDateObject - checkInDateObject) / (1000 * 60 * 60 * 24))

    let options = Options[numberOfPax]?.options
    const pax = numberOfPax || 0
    if (options === undefined) {
        const keys = Object.keys(Options)
        for (let i = 0; i < keys.length - 1; i++) {
            if (pax < keys[i]) {
                options = Options[keys[i]].options
                break
            } else if (keys[i] < pax && pax < keys[i + 1]) {
                options = [...Options[keys[i]].options, ...Options[keys[i + 1]].options]
                break
            }
        }
        if (pax > keys[keys.length - 1]) {
            options = Options[keys[keys.length - 1]].options
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <h2>Details</h2>
                    <form action="">
                        <label htmlFor="number-pax" className="form-label">Number of Adults</label>
                        <div className="input-group mb-3">
                            <input type="number" onChange={(e) => setNumberOfPax(parseInt(e.target.value))} defaultValue={2} className="form-control" id="number-pax" aria-describedby="basic-addon3" />
                        </div>
                        <label htmlFor="date-check-in" className="form-label">Check-In</label>
                        <div className="input-group mb-3">
                            <input type="date" onChange={(e) => setCheckInDate(e.target.value)} defaultValue={2} className="form-control" id="date-check-in" aria-describedby="basic-addon3" />
                        </div>
                        <label htmlFor="date-check-out" className="form-label">Check-Out</label>
                        <div className="input-group mb-3">
                            <input type="date" onChange={(e) => setCheckOutDate(e.target.value)} defaultValue={2} className="form-control" id="date-check-out" aria-describedby="basic-addon3" />
                        </div>
                        <div className="mt-4">
                            <input type="button" value="Book via WhatsApp" className="form-control" onClick={onBooking} />
                        </div>
                    </form>
                </div>
                <div className="col-md-8">
                    <p>
                        <div className="d-md-flex align-items-top">
                            {
                                (options || []).map((o, i) =>
                                    <div className="me-2" key={`option-${i}`}>
                                    <ShowOption option={o} index={i} nights={dateDiff || 1} pax={numberOfPax} />
                                    </div>
                                )
                            }
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookingOptions
