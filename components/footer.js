import MaterialIcon from "./materialIcon"
import CONTACTS from "../pages/api/contacts"

const Footer = () => {

    return (
        <>
            <div className="d-md-flex align-items-start justify-content-between">
                <div>
                    <p>
                        <strong><MaterialIcon icon="email" desc="Email" /></strong>
                        {CONTACTS.email}
                    </p>
                    <p>
                        <strong><MaterialIcon icon="phone" desc="Phone" /></strong>
                        {CONTACTS.phoneNumbers.join(", ")}
                    </p>
                    <div className="d-flex align-items-center">
                        {
                            [
                                {
                                    src: "kerala-tourism-logo.png",
                                    href: "https://keralatourism.org/"
                                },
                                {
                                    src: "dtpc-logo.png",
                                    href: "https://dtpckannur.com/"
                                },
                                {
                                    src: "airport-logo.png",
                                    href: "https://kannurairport.aero/"
                                },
                            ].map(
                                logo => <div className={`keralaTourismLogo p-2 me-2`} >
                                    <a href={logo.href} target="_blank">
                                        <img src={`/images/${logo.src}`} style={{ height: "100px" }} className="img-fluid" />
                                    </a>
                                </div>
                            )
                        }

                    </div>

                </div>
                <div>
                    <img src="/images/amban-heritage-logo.png" alt="Amban Heritage" style={{ width: "300px" }} className="img-fluid" /><br />
                    <strong>{CONTACTS.address.name}</strong><br />
                    {CONTACTS.address.lines.map(line => <>{line}<br /></>)}
                </div>
            </div>
            <script async src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=737&amp;locationId=5888749&amp;lang=en_IN&amp;rating=true&amp;nreviews=5&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=false&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
        </>
    )
}

export default Footer
