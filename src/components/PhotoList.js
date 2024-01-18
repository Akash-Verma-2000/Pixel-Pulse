import Photo from "./Photo"
import './Styles.css';
import BackButton from "./BackButton";
import NewPhotoForm from "./NewPhotoForm";

import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../firebaseInit";


export default function PhotoPage({ deleteBtnHandler, albumID, searchResultsArray, setSearchInput, setImageSlider, setOpenPhotoIndex, albumName, photoArray, setHomePage, setPhotoPage, photoObj, setPhotoObj, NewPhotoFormSubmitHandler }) {




    // async function deleteBtnHandler(obj) {
    //     let temp = obj;
    //     console.log(temp)

    //     console.log(photoArray);
    //     photoArray = photoArray.filter((photo) => photo.link != obj.link);
    //     console.log(photoArray);
    //     // const washingtonRef = doc(db, "Albums", albumID);
    //     // await updateDoc(washingtonRef, {
    //     //     photos: arrayRemove(obj)
    //     // });
    // }


    return (<>


        <BackButton
            setHomePage={setHomePage}
            setPhotoPage={setPhotoPage}
        />

        <NewPhotoForm
            photoObj={photoObj}
            setPhotoObj={setPhotoObj}
            NewPhotoFormSubmitHandler={NewPhotoFormSubmitHandler}
        />


        <div className="container mt-5">

            <h2 className="text-primary"><i className="bi bi-folder"></i> {albumName} </h2>


            <input placeholder="Search" type="text" className=" my-5 border-primary border-2 form-control"
                onChange={(e) => { setSearchInput(e.target.value) }}
            />


            {searchResultsArray.length ?

                <div className="row d-flex justify-content-around">

                    {searchResultsArray.length != 0 ? <h2 className="text-primary"><i className="bi bi-search"></i> Search Results </h2> : null}

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