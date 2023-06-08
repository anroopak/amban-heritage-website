import { useState } from "react";
import MaterialIcon from "./materialIcon";
import CONTACTS from "../pages/api/contacts";

const Options = {
  2: {
    numberOfPax: 2,
    options: [["ground-floor-master-bedroom"], ["top-floor-master-bedroom"]],
  },
  3: {
    numberOfPax: 3,
    options: [
      ["top-floor-master-bedroom"],
      ["top-floor-master-bedroom", "top-floor-second-bedroom"],
    ],
  },
  4: {
    numberOfPax: 4,
    options: [
      ["top-floor-master-bedroom", "top-floor-second-bedroom"],
      ["top-floor-master-bedroom", "ground-floor-master-bedroom"],
    ],
  },
  6: {
    numberOfPax: 6,
    options: [
      [
        "ground-floor-master-bedroom",
        "top-floor-master-bedroom",
        "top-floor-second-bedroom",
      ],
    ],
  },
};
export const Rooms = {
  "ground-floor-master-bedroom": {
    label: "Master bedroom on the ground floor",
    amenities: [
      <MaterialIcon key="bed" icon="bed" desc="Queen size bed" />,
      <MaterialIcon key="ac_unit" icon="ac_unit" desc="Air Conditioned" />,
      <MaterialIcon
        key="bathroom"
        icon="bathroom"
        desc="Attached bathroom and toilet"
      />,
      <MaterialIcon
        key="connected_tv"
        icon="connected_tv"
        desc="TV with Amazon Fire TV (in adjacent room)"
      />,
    ],
    rate: 2200,
    max: 2,
    extraLimit: 0,
  },
  "top-floor-master-bedroom": {
    label: "Master bedroom on the top floor",
    amenities: [
      <MaterialIcon key="bed" icon="bed" desc="Double cot bed" />,
      <MaterialIcon key="ac_unit" icon="ac_unit" desc="Air Conditioned" />,
      <MaterialIcon
        key="bathroom"
        icon="bathroom"
        desc="Attached bathroom and toilet"
      />,
      <MaterialIcon
        key="connected_tv"
        icon="connected_tv"
        desc="TV with Amazon Fire TV (in adjacent room)"
      />,
    ],
    rate: 2200,
    max: 2,
    extraLimit: 0,
  },
  "top-floor-second-bedroom": {
    label: "Second bedroom on the top floor",
    amenities: [
      <MaterialIcon key="bed" icon="bed" desc="2 single beds" />,
      <MaterialIcon
        key="info"
        icon="info"
        desc="No A/C, No attached bathroom"
      />,
      <MaterialIcon
        key="bathroom"
        icon="bathroom"
        desc="Common bathroom available"
      />,
    ],
    rate: 1100,
    max: 2,
    extraLimit: 0,
  },
};

const RoomExtra = {
  rate: 700,
};

const ShowOption = ({ option, index, nights, pax }) => {
  let rent = 0;
  let maxPax = 0;
  option.forEach((o) => {
    rent += Rooms[o].rate;
    maxPax += Rooms[o].max;
  });
  const extraPax = Math.max(0, pax - maxPax);
  return (
    <div className="me-2">
      <h4>Option {index + 1}</h4>
      <strong>Rooms</strong>
      <br />
      {option.map((o) => (
        <>
          {Rooms[o].label}
          <br />
        </>
      ))}
      <br />
      <div>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <strong>Room fee</strong>
            </div>
            <div>
              &#8377; {rent} X {nights} nights{" "}
            </div>
          </div>
          {extraPax ? (
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>Extra person</strong>
              </div>
              <div>
                &#8377; {RoomExtra.rate} X {extraPax} X {nights} nights
              </div>
            </div>
          ) : null}
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <div>Total</div>
          <div className="me-2">
            &#8377; {(rent + extraPax * RoomExtra.rate) * nights}
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingOptions = () => {
  const [numberOfPax, setNumberOfPax] = useState(2);
  const [numberOfChildPax, setNumberOfChildPax] = useState(0);
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  const checkInDateObject = new Date(checkInDate);
  const checkOutDateObject = new Date(checkOutDate);
  const onBooking = () => {
    let text = `Hello, I would like to book rooms for ${numberOfPax} adults`;
    if (numberOfChildPax !== 0) text += `, ${numberOfChildPax} children.`;
    if (checkInDate && checkOutDate) {
      text += `.\nCheck-in: ${checkInDateObject.toDateString()}. Check-out: ${checkOutDateObject.toDateString()}`;
    }
    window.open(
      `https://wa.me/${CONTACTS.phoneNumbers[0]
        .replace("+", "")
        .replace("-", "")}?text=${encodeURIComponent(text)}`
    );
  };

  const dateDiff =
    checkInDateObject &&
    checkOutDateObject &&
    (checkOutDateObject - checkInDateObject) / (1000 * 60 * 60 * 24);

  const pax = Math.max(numberOfPax || 0, 1);
  let options = Options[numberOfPax]?.options;
  if (options === undefined) {
    const keys = Object.keys(Options);
    for (let i = 0; i < keys.length - 1; i++) {
      if (pax < keys[i]) {
        options = Options[keys[i]].options;
        break;
      } else if (keys[i] < pax && pax < keys[i + 1]) {
        options = [
          ...Options[keys[i]].options,
          ...Options[keys[i + 1]].options,
        ];
        break;
      }
    }
    if (pax > keys[keys.length - 1]) {
      options = Options[keys[keys.length - 1]].options;
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <h2>Tariff</h2>
          <div className="row">
            <div className="col-md-5 border p-4 m-2">
              <h5>{Rooms["ground-floor-master-bedroom"].label}</h5>
              <p>
                &#8377; {Rooms["ground-floor-master-bedroom"].rate} per night
              </p>
            </div>
            <div className="col-md-5 border p-4 m-2">
              <h5>{Rooms["top-floor-master-bedroom"].label}</h5>
              <p>&#8377; {Rooms["top-floor-master-bedroom"].rate} per night</p>
            </div>
            <div className="col-md-5 border p-4 m-2">
              <h5>Top floor</h5>
              <p>
                {Rooms["top-floor-master-bedroom"].label} and{" "}
                {Rooms["top-floor-second-bedroom"].label}
              </p>
              <p>
                &#8377;{" "}
                {Rooms["top-floor-master-bedroom"].rate +
                  Rooms["top-floor-second-bedroom"].rate}{" "}
                per night
              </p>
            </div>
            <div className="col-md-5 border p-4 m-2">
              <h5>Full House</h5>
              <p>
                {Rooms["ground-floor-master-bedroom"].label},{" "}
                {Rooms["top-floor-master-bedroom"].label} and{" "}
                {Rooms["top-floor-second-bedroom"].label}
              </p>
              <p>
                &#8377;{" "}
                {Rooms["top-floor-master-bedroom"].rate +
                  Rooms["top-floor-second-bedroom"].rate +
                  Rooms["ground-floor-master-bedroom"].rate}{" "}
                per night
              </p>
            </div>
            <div className="col-md-5 border p-4 m-2">
              <h5>Extra Person</h5>
              <p>
                &#8377;{" "}
                {RoomExtra.rate} per person per night
              </p>
            </div>
            <div className="col-md-5 border p-4 m-2">
              <h5>Food</h5>
              <p>
                Breakfast complementary, <br /> 
                Kerala style Lunch and Dinner available on request on paid-basis. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h2>Details</h2>
          <form action="">
            <div className="g-2 align-items-center">
              <div className="col">
                <label htmlFor="number-pax" className="form-label">
                  Number of Adults
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    onChange={(e) => setNumberOfPax(parseInt(e.target.value))}
                    defaultValue={2}
                    className="form-control"
                    id="number-pax"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="number-pax" className="form-label">
                  Number of Children (age &#60; 6)
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    onChange={(e) =>
                      setNumberOfChildPax(parseInt(e.target.value))
                    }
                    defaultValue={0}
                    className="form-control"
                    id="number-pax"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="date-check-in" className="form-label">
                  Check-In
                </label>
                <div className="input-group mb-3">
                  <input
                    type="date"
                    onChange={(e) => setCheckInDate(e.target.value)}
                    defaultValue={2}
                    className="form-control"
                    id="date-check-in"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="date-check-out" className="form-label">
                  Check-Out
                </label>
                <div className="input-group mb-3">
                  <input
                    type="date"
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    defaultValue={2}
                    className="form-control"
                    id="date-check-out"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>

              <div className="mt-4 col">
                <input
                  type="button"
                  value="Book via WhatsApp"
                  className="form-control"
                  onClick={onBooking}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingOptions;
