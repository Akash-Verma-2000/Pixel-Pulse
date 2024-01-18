import AlbumImg from "./Images/Slid-4.jpg";

export default function Album({ setAlbumName, setAlbumID, albumObj, setPhotoArray, setHomePage, setPhotoPage, albumID }) {

    function albumClickEvent() {
        setHomePage(false)
        setPhotoPage(true);
        setPhotoArray(albumObj.photos);
        setAlbumID(albumID);
        setAlbumName(albumObj.title);
    }




    return (<>

        <div onClick={albumClickEvent} className="card my-shadow p-0 col-5 col-md-3 mx-1 my-4 album">
            <img src={AlbumImg} className="card-img-top" alt="Card Img" />
            <div className="card-body bg-light">
                <p className="card-text bg-light border-0">{albumObj.title}</p>
            </div>
        </div >

    </>)
}