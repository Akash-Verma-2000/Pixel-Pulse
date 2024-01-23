// Importing the Album component
import Album from "./Album"

// Functional component for rendering a list of albums
export default function AlbumList({ setAlbumName, setAlbumID, albumsArray, setPhotoArray, setHomePage, setPhotoPage }) {

    // Rendering the list of albums
    return (
        <>
            <div className="row d-flex justify-content-around">
                {
                    albumsArray.map((albumObj) => {
                        return < Album
                            setAlbumName={setAlbumName}
                            albumObj={albumObj}
                            setHomePage={setHomePage}
                            setPhotoPage={setPhotoPage}
                            setPhotoArray={setPhotoArray}
                            albumID={albumObj.id}
                            setAlbumID={setAlbumID}
                        />
                    })
                }
            </div>
        </>
    )
}