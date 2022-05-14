import DESTINATIONS from "../api/destinations"
import { useRouter } from "next/router";
import CommonHead from "../../components/head"
import MaterialIcon from "../../components/materialIcon";
import Footer from "../../components/footer";
import Link from "next/link";


export default function DestinationDetail() {
    const router = useRouter();
    const destination = DESTINATIONS[router.query.slug]

    return (
        <div>
            <CommonHead />
            <div className="container-fluid bg-brown">
                <div className="container d-flex py-4 align-items-center">
                    <Link href="/" className="no-underline"><MaterialIcon icon="arrow_back" desc="Home" /></Link>
                </div>
            </div>
            <div className="container mt-4 mb-4">
                <h3>
                    {destination?.title}
                </h3>
                <hr />
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="d-flex align-items-center">
                            <MaterialIcon icon="maps" desc={`${destination?.distance} km away.`} className="me-2" />
                            {destination?.website && <Link href={destination?.website} target="_blank" rel="noreferrer"><MaterialIcon icon="language" desc="Website" /></Link>}
                            {destination?.article && <Link href={destination?.article} target="_blank" rel="noreferrer"><MaterialIcon icon="link" desc="Article on Kerala tourism website" /></Link>}
                        </div>
                        <hr />
                        <div>{destination?.description}</div>
                    </div>
                    <div className="col-md-4 col-12">
                        <img src={destination?.images[0]} alt={destination?.title} className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="bg-brown py-4">
                <div className="container py-4">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
