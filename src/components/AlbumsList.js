import Album from "./Album"

export default function AlbumList({ setAlbumName, setAlbumID, albumsArray, setPhotoArray, setHomePage, setPhotoPage }) {

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