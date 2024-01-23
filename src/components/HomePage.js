// Importing CSS styles for the component
import './Styles.css'

// Importing components used in the HomePage
import Carousel from "./Carousel";
import Banner from "./Banner";
import AlbumList from "./AlbumsList";
import NewAlbumForm from './NewAlbumForm';

// Functional component for rendering the HomePage
export default function HomePage({ setAlbumName, setAlbumID, albumObj, setAlbumObj, NewAlbumFormSubmitHandler, albumsArray, setPhotoArray, setHomePage, setPhotoPage }) {
    return (
        <>
            {/* Rendering the NewAlbumForm component with props */}
            <NewAlbumForm
                albumObj={albumObj}
                setAlbumObj={setAlbumObj}
                NewAlbumFormSubmitHandler={NewAlbumFormSubmitHandler}
            />

            {/* Rendering the Banner component */}
            <Banner />

            {/* Rendering the Carousel component */}
            <Carousel />

            {/* Main container for the content */}
            <div className="container ">

                {/* Heading for the gallery */}
                <div className="d-flex">
                    <h2 className="text-primary" >Gallery o</h2>
                    <h2 className="text-secondary" >f Memories</h2>
                </div>

                {/* Description for the gallery */}
                <p className="mb-3">
                    Dive into Our Photo Albums
                </p>

                {/* Rendering the AlbumList component with props */}
                <AlbumList
                    setAlbumName={setAlbumName}
                    albumsArray={albumsArray}
                    setPhotoArray={setPhotoArray}
                    setHomePage={setHomePage}
                    setPhotoPage={setPhotoPage}
                    setAlbumID={setAlbumID}
                />
            </div>
        </>
    )
}
