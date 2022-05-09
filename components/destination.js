import MaterialIcon from "./materialIcon"
import Link from "next/link"

const Destination = ({ slug, title, article, images, distance, website, description }) => {
    return (
        <div className="me-2" style={{ width: "300px" }}>
            <div className="my-2">
                <img src={images[0]} alt={slug} style={{ height: "150px" }} className="img-fluid" />
            </div>
            <h6 className="fw-bold" style={{ height: "3ems" }} >{title}</h6>
            <div className="d-flex align-items-center justify-content-between">
                <p><MaterialIcon icon="map" desc={`${distance} km away.`} /></p>
                <p>
                    <Link href={`/destinations/${slug}`} className="text-underline">Read more.</Link>
                </p>
            </div>
        </div>
    )
}

export default Destination
