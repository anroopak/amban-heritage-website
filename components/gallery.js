import ReactGallery from 'react-grid-gallery';
import MaterialIcon from './materialIcon';

const IMAGES = [
    {
        "src": "/images/gallery/01-resized.jpg",
        "thumbnail": "/images/gallery/01-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/02-resized.jpg",
        "thumbnail": "/images/gallery/02-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/03-resized.jpg",
        "thumbnail": "/images/gallery/03-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/04-resized.jpg",
        "thumbnail": "/images/gallery/04-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/05-resized.jpg",
        "thumbnail": "/images/gallery/05-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/06-resized.jpg",
        "thumbnail": "/images/gallery/06-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/07-resized.jpg",
        "thumbnail": "/images/gallery/07-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/08-resized.jpg",
        "thumbnail": "/images/gallery/08-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/09-resized.jpg",
        "thumbnail": "/images/gallery/09-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/10-resized.jpg",
        "thumbnail": "/images/gallery/10-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/11-resized.jpg",
        "thumbnail": "/images/gallery/11-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/12-resized.jpg",
        "thumbnail": "/images/gallery/12-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/13-resized.jpg",
        "thumbnail": "/images/gallery/13-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/14-resized.jpg",
        "thumbnail": "/images/gallery/14-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/15-resized.jpg",
        "thumbnail": "/images/gallery/15-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/16-resized.jpg",
        "thumbnail": "/images/gallery/16-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/17-resized.jpg",
        "thumbnail": "/images/gallery/17-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/18-resized.jpg",
        "thumbnail": "/images/gallery/18-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/19-resized.jpg",
        "thumbnail": "/images/gallery/19-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/20-resized.jpg",
        "thumbnail": "/images/gallery/20-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/21-resized.jpg",
        "thumbnail": "/images/gallery/21-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/22-resized.jpg",
        "thumbnail": "/images/gallery/22-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/23-resized.jpg",
        "thumbnail": "/images/gallery/23-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/24-resized.jpg",
        "thumbnail": "/images/gallery/24-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/25-resized.jpg",
        "thumbnail": "/images/gallery/25-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/26-resized.jpg",
        "thumbnail": "/images/gallery/26-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/27-resized.jpg",
        "thumbnail": "/images/gallery/27-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/28-resized.jpg",
        "thumbnail": "/images/gallery/28-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/29-resized.jpg",
        "thumbnail": "/images/gallery/29-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/30-resized.jpg",
        "thumbnail": "/images/gallery/30-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/31-resized.jpg",
        "thumbnail": "/images/gallery/31-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/32-resized.jpg",
        "thumbnail": "/images/gallery/32-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/33-resized.jpg",
        "thumbnail": "/images/gallery/33-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/34-resized.jpg",
        "thumbnail": "/images/gallery/34-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/35-resized.jpg",
        "thumbnail": "/images/gallery/35-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/36-resized.jpg",
        "thumbnail": "/images/gallery/36-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/37-resized.jpg",
        "thumbnail": "/images/gallery/37-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/38-resized.jpg",
        "thumbnail": "/images/gallery/38-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/39-resized.jpg",
        "thumbnail": "/images/gallery/39-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/40-resized.jpg",
        "thumbnail": "/images/gallery/40-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/41-resized.jpg",
        "thumbnail": "/images/gallery/41-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/42-resized.jpg",
        "thumbnail": "/images/gallery/42-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/43-resized.jpg",
        "thumbnail": "/images/gallery/43-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/44-resized.jpg",
        "thumbnail": "/images/gallery/44-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/45-resized.jpg",
        "thumbnail": "/images/gallery/45-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/46-resized.jpg",
        "thumbnail": "/images/gallery/46-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/47-resized.jpg",
        "thumbnail": "/images/gallery/47-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/48-resized.jpg",
        "thumbnail": "/images/gallery/48-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 132,
        "caption": "Amban Heritage"
    },
    {
        "src": "/images/gallery/49-resized.jpg",
        "thumbnail": "/images/gallery/49-resized-thumbnail.jpg",
        "thumbnailWidth": 200,
        "thumbnailHeight": 301,
        "caption": "Amban Heritage"
    }
]

const Gallery = () => (
    <div>
        <div className="gallery">
            <div>
                <ReactGallery
                    images={IMAGES}
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

export default Gallery
