// Importing CSS styles for the component
import "./Styles.css";

// Functional component for rendering an image slider
export default function ImageSlider({ photoArray, cancelButtonHandler, searchResultsArray }) {

  // Determine the array to use based on search results
  let currPhotoArray;


  if (searchResultsArray.length == 0) {
    // If no search results, use the original photoArray
    currPhotoArray = photoArray;
  } else {
    // If there are search results, use the searchResultsArray
    currPhotoArray = searchResultsArray;
  }

  // Rendering the image slider component
  return (
    <>

      {/* Cancel button for closing the image slider */}
      <button onClick={cancelButtonHandler} className="btn z-3 btn-primary m-2 end-0 my-shadow position-fixed " type="button"><h3 className="bi bi-x-lg"></h3></button>

      {/* Container for the image slider */}
      <div className="container showcase-container showcase">
        <div id="carouselExample" className="carousel slide pb-5">
          <div className="carousel-inner">

            {/* Mapping through the current photo array to render each image */}
            {currPhotoArray.map((photo, index) => (
              <div key={index} className={` carousel-item${index === 0 ? ' active' : ''}`} >
                <img src={photo.link} className=" showcase-image" alt={photo.title} />
              </div>
            ))}
          </div>

          {/* Previous button for the carousel */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"

          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden ">Previous</span>
          </button>

          {/* Next button for the carousel */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

