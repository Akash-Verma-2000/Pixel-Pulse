// Importing necessary components and styles
import Photo from "./Photo"
import './Styles.css';
import BackButton from "./BackButton";
import NewPhotoForm from "./NewPhotoForm";

// Functional component for rendering the PhotoPage
export default function PhotoPage({ deleteBtnHandler, albumID, searchResultsArray, setSearchInput, setImageSlider, setOpenPhotoIndex, albumName, photoArray, setHomePage, setPhotoPage, photoObj, setPhotoObj, NewPhotoFormSubmitHandler }) {

    // Rendering the components for the PhotoPage
    return (<>

        {/* BackButton component to navigate back */}
        <BackButton
            setHomePage={setHomePage}
            setPhotoPage={setPhotoPage}
        />

        {/* NewPhotoForm component for adding new photos */}
        <NewPhotoForm
            photoObj={photoObj}
            setPhotoObj={setPhotoObj}
            NewPhotoFormSubmitHandler={NewPhotoFormSubmitHandler}
        />

        {/* Main container for the PhotoPage */}
        <div className="container mt-5">

            {/* Displaying the album name */}
            <h2 className="text-primary"><i className="bi bi-folder"></i> {albumName} </h2>

            {/* Search input for filtering photos */}
            <input placeholder="Search" type="text" className=" my-5 border-primary border-2 form-control"
                onChange={(e) => { setSearchInput(e.target.value) }}
            />

            {/* Conditional rendering based on search results */}
            {searchResultsArray.length ?

                <div className="row d-flex justify-content-around">

                    {/* Displaying search results heading if there are search results */}
                    {searchResultsArray.length != 0 ? <h2 className="text-primary"><i className="bi bi-search"></i> Search Results </h2> : null}

                    {/* Mapping through search results and rendering Photo component */}
                    {searchResultsArray.map((photo, index) => {

                        return <Photo

                            deleteBtnHandler={deleteBtnHandler}
                            key={index}
                            setImageSlider={setImageSlider}
                            setPhotoPage={setPhotoPage}
                            photo={photo}
                            index={index}
                            setOpenPhotoIndex={setOpenPhotoIndex}
                        />
                    })}

                </div> :

                <div className="row d-flex justify-content-around">

                    {/* Mapping through photoArray and rendering Photo component */}
                    {photoArray.map((photo, index) => {

                        return <Photo

                            deleteBtnHandler={deleteBtnHandler}
                            key={index}
                            setImageSlider={setImageSlider}
                            setPhotoPage={setPhotoPage}
                            photo={photo}
                            index={index}
                            setOpenPhotoIndex={setOpenPhotoIndex}
                        />

                    })}

                </div>}

        </div>

    </>)
}