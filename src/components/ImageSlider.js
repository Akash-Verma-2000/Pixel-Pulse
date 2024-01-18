
import "./Styles.css";

export default function ImageSlider({ photoArray, cancelButtonHandler, searchResultsArray }) {

  let currPhotoArray;

  if (searchResultsArray.length == 0) {

    currPhotoArray = photoArray;
  } else {
    currPhotoArray = searchResultsArray;
  }

  return (
    <>


      <button onClick={cancelButtonHandler} className="btn z-3 btn-primary m-2 end-0 my-shadow position-fixed " type="button"><h3 className="bi bi-x-lg"></h3></button>



      <div className="container showcase-container showcase">
        <div id="carouselExample" className="carousel slide pb-5">
          <div className="carousel-inner">


            {currPhotoArray.map((photo, index) => (

              <div key={index} className={` carousel-item${index === 0 ? ' active' : ''}`} >

                <img src={photo.link} className=" showcase-image" alt={photo.title} />

              </div>

            ))}


          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"

          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden ">Previous</span>
          </button>

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

