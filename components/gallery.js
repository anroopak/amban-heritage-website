import ReactGallery from 'react-grid-gallery';
import MaterialIcon from './materialIcon';
import IMAGES from '../pages/api/images';
import { useState } from 'react';

const TYPE_FILTERS = [
    {
        label: 'Exterior',
        filters: ['exterior']
    },
    {
        label: 'Kitchen and Dining',
        filters: ['kitchen', 'dining']
    },
    {
        label: 'Top Floor',
        filters: ['top-floor']
    },
    {
        label: 'Ground Floor',
        filters: ['ground-floor']
    },
]

const Gallery = () => {
    const [selectedIndex, setIndex] = useState(0)
    const filteredImages = IMAGES.filter(image => TYPE_FILTERS[selectedIndex].filters.some(f => image.type.includes(f)))
    return (
        <div>
            <ul class="nav nav-gallery">
                {TYPE_FILTERS.map((f, i) => (
                    <li class="nav-item">
                        <a class={`nav-link ${i === selectedIndex ? "active" : ""}`} aria-current="page" onClick={() => setIndex(i)}>{f.label}</a>
                    </li>
                ))}
            </ul>
            <div className="gallery">
                <div>
                    <ReactGallery
                        images={filteredImages}
                        enableImageSelection={false}
                        showLightboxThumbnails={true}
                        rowHeight={200}
                        maxRows={2}
                    />
                </div>
            </div>
            <div>
                <MaterialIcon icon="apps" desc="Click on one of the images to view all" />
            </div>
        </div>)
}

export default Gallery
