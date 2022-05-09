import styles from '../styles/Home.module.css'
import CommonHead from "../components/head"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AirBnB from '../components/airbnb';
import MaterialIcon from "../components/materialIcon";
import Destination from '../components/destination';
import Gallery from '../components/gallery';
import Footer from '../components/footer';
import CONTACTS from './api/contacts';
import DESTINATIONS from './api/destinations';

function yearsOld() {
  const estdYear = new Date(1904, 1, 1)
  var ageDifMs = Date.now() - estdYear;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const AmbanDesc = ({ addLineBreak = true }) => {
  return (
    <p>
      Amban Heritage is a {yearsOld()} year old "Tharavaadu" - ancient ancestral home.
      {addLineBreak ? <br /> : ' '}
      Amban Heritage welcomes you to the traditions of Kannur, Relive Heritage and relax.
    </p>
  )
}

export default function Home() {

  return (
    <div>
      <CommonHead />
      <div className={`${styles.banner}`}>
        <div className={`${styles.bannerOverlay} h-100`}>
          <div className="h-100 container ps-4 d-flex flex-column justify-content-center">
            <h1>Amban Heritage Homestay</h1>
            <h2>Relive Heritage</h2>
            <AmbanDesc />
            <div>
              <a href="#bookNow" className="btn btn-outlined btn-light px-4">
                Book Now
            </a>
            </div>
            <p className="mt-4">"Silver House" Homestay <br />approved by Department of Tourism, Govt. of Kerala</p>
            <div className="d-flex align-items-center">
              <div className={`${styles.keralaTourismLogo} p-2`} >
                <img src="/images/kerala-tourism-logo.png" style={{ height: "100px" }} className="img-fluid" />
              </div>
              <div className={`${styles.keralaTourismLogo} p-2 ms-2`} >
                <img src="/images/kerala-tourism-silver-logo.png" style={{ height: "100px" }} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <h1>Welcome to Amban Heritage Homestay</h1>
            <p style={{ textAlign: "justify" }}>
              Kannur is most renowned for the Theyyam performances in its temples.
              This magnificent art form plays an integral part in the culture of this Northern Kerala district.
            </p>
            <p style={{ textAlign: "justify" }}>
              Formerly known as Cannanore, Marco Polo christened it a ‘Great Emporium Of Spice Trade’.
              Kannur has, since time immemorial, been hailed as an influential sea port.
              Legend has it that it had interactions and trade relations with the rest of the world since the time of King Solomon to the Greeks, Arabs and Romans.
              It has a plethora of forts, temples, beaches and wildlife sanctuaries that regularly attract visitors.
              Major festivals and events are held throughout the year and this is among the best places in Kerala to spend your vacation in.
            </p>
            <AmbanDesc addLineBreak={false} />
            <div className="mt-2">
              <h2>Services inside the premise</h2>
              <div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <MaterialIcon icon="kitchen" desc="Kitchen" />
                    <MaterialIcon icon="directions_car" desc="Vehicle parking" />
                    <MaterialIcon icon="fence" desc="Private backyard - fully fenced" />
                  </div>
                  <div className="col-md-6 col-12">
                    <MaterialIcon icon="ac_unit" desc="Air Conditioning" />
                    <MaterialIcon icon="wifi" desc="Wifi" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2>House rules</h2>
              <div className="row">
                <div className="col-md-6 col-12">
                  <MaterialIcon icon="schedule" desc="Check-in: 12 PM - 9 PM" />
                  <MaterialIcon icon="schedule" desc="Check-out: 11 AM" />
                </div>
                <div className="col-md-6 col-12">
                  <MaterialIcon icon="pets" desc="Pets NOT allowed" />
                  <MaterialIcon icon="smoke_free" desc="Smoking NOT allowed inside rooms" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="d-flex justify-content-center">
              <div className={`${styles.keralaTourismLogo} p-2`} >
                <img src="/images/kerala-tourism-logo.png" style={{ height: "100px" }} className="img-fluid" />
              </div>
              <div className={`${styles.keralaTourismLogo} p-2 ms-2`} >
                <img src="/images/kerala-tourism-silver-logo.png" style={{ height: "100px" }} className="img-fluid" />
              </div>
            </div>
            <p className="fw-bold text-md-center text-left">
              "Silver House" Homestay <br /> approved by Department of Tourism, Govt. of Kerala
            </p>
            <div className="mt-2">
              <AirBnB />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-brown py-4 mt-4" id="bookNow">
        <div className="container">
          <div className="d-md-flex align-items-center justify-content-md-between">
            <p>
              Contact Us <br />
              <small>to book our homestay</small>
            </p>
            {CONTACTS.phoneNumbers.map(
              phoneNumber => <MaterialIcon className="me-2" icon="phone" desc={<a href={`tel:${phoneNumber}`}>{phoneNumber}</a>} />
            )}
            <MaterialIcon className="me-2" icon="email" desc={<a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>} />
          </div>

        </div>
      </div>

      <div className="container mt-4">
        <h1>Places to Visit</h1>
        <div className="d-flex">

          {
            Object.keys(DESTINATIONS).map(slug => <Destination slug={slug} {...DESTINATIONS[slug]} />)
          }
        </div>
      </div>

      <div className="container mt-4">
        <h1>Gallery</h1>
        <Gallery />
      </div>

      <div className="container-fluid bg-brown mt-4 py-4">
        <div className="container">
          <Footer />
        </div>
      </div>

    </div>
  )
}
