import './Styles.css'

import Carousel from "./Carousel";
import Banner from "./Banner";
import AlbumList from "./AlbumsList";
import NewAlbumForm from './NewAlbumForm';

export default function HomePage({ setAlbumName, setAlbumID, albumObj, setAlbumObj, NewAlbumFormSubmitHandler, albumsArray, setPhotoArray, setHomePage, setPhotoPage }) {
    return (
        <>
            <NewAlbumForm
                albumObj={albumObj}
                setAlbumObj={setAlbumObj}
                NewAlbumFormSubmitHandler={NewAlbumFormSubmitHandler}
            />
            <Banner />
            <Carousel />


            <div className="container ">


                <div className="d-flex">
                    <h2 className="text-primary" >Gallery o</h2>
                    <h2 className="text-secondary" >f Memories</h2>
                </div>

                <p className="mb-3">
                    Dive into Our Photo Albums
                </p>

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
