// Importing an image for the album from the specified path
import AlbumImg from "./Images/Slid-4.jpg";

// Functional component for rendering an album
export default function Album({ setAlbumName, setAlbumID, albumObj, setPhotoArray, setHomePage, setPhotoPage, albumID }) {

    // Function to handle the click event when an album is clicked
    function albumClickEvent() {
        // Update state to navigate to the PhotoPage component and display photos from the clicked album
        setHomePage(false)
        setPhotoPage(true);
        setPhotoArray(albumObj.photos);
        setAlbumID(albumID);
        setAlbumName(albumObj.title);
    }



    // Rendering the album component
    return (<>

        <div onClick={albumClickEvent} className="card my-shadow p-0 col-5 col-md-3 mx-1 my-4 album">
            <img src={AlbumImg} className="card-img-top" alt="Card Img" />
            <div className="card-body bg-light">
                <p className="card-text bg-light border-0">{albumObj.title}</p>
            </div>
        </div >

    </>)
}