// Functional component for rendering a photo card
export default function Photo({ deleteBtnHandler, photo, index, setOpenPhotoIndex, setPhotoPage, setImageSlider }) {

    // Handler function when a photo is clicked
    function photoClickHandler() {
        // Hide the photo page
        setPhotoPage(false);
        // Set the open photo index for the image slider
        setOpenPhotoIndex(index);
        // Show the image slider
        setImageSlider(true);
    }

    // Rendering the photo card component
    return (<>

        {/* Card for displaying the photo */}
        <div className="card my-shadow p-0 col-5 col-md-3 mx-1 my-4 photo-card">

            {/* Image of the photo, clicking on it triggers the photoClickHandler */}
            <img onClick={photoClickHandler} src={photo.link} className="card-img-top" alt="Card Img" />
            <div className="card-body bg-light">
                {/* Title of the photo */}
                <p className="card-text bg-light border-0">{photo.title}</p>
                {/* Button to delete the photo, clicking on it triggers deleteBtnHandler */}
                <button onClick={() => deleteBtnHandler(photo)} className="btn z-3 text-danger  position-absolute top-0 end-0" type="button"><h3 class="bi bi-trash"></h3></button>
            </div>
        </div >

    </>)
}