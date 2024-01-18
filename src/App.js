import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { db } from "./firebaseInit";
import { doc, collection, addDoc, getDocs, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import PhotoPage from "./components/PhotoList";
import ImageSlider from "./components/ImageSlider";


import { useEffect, useState } from "react";

function App() {


  const [albumsArray, setAlbumsArray] = useState([]);
  const [albumObj, setAlbumObj] = useState({ title: "", photos: [] });

  let [photoArray, setPhotoArray] = useState([]);

  const [photoObj, setPhotoObj] = useState({ title: "", link: "" });

  const [homePage, setHomePage] = useState(true);
  const [photoPage, setPhotoPage] = useState(false);
  const [imageSlider, setImageSlider] = useState(false);

  const [albumID, setAlbumID] = useState(null);
  const [albumName, setAlbumName] = useState("");

  const [openPhotoIndex, setOpenPhotoIndex] = useState(0);

  const [searchInput, setSearchInput] = useState("");
  const [searchResultsArray, setSearchResultsArray] = useState([]);


  async function NewPhotoFormSubmitHandler(e) {
    e.preventDefault();
    const washingtonRef = doc(db, "Albums", albumID);
    await updateDoc(washingtonRef, {
      photos: arrayUnion(photoObj)
    });

    setPhotoArray((prevPhotoArray) => [...prevPhotoArray, photoObj]);
    setPhotoObj({ title: "", link: "" })
  }


  function createSearchResultArray() {
    if (searchInput == "") {
      return setSearchResultsArray([]);
    }
    const searchResults = photoArray.filter((photo) => {
      return photo.title.toLowerCase().indexOf(searchInput.toLowerCase()) == 0;
    })
    setSearchResultsArray(searchResults);
  }

  useEffect(() => {
    createSearchResultArray();
  }, [searchInput])


  function cancelButtonHandler() {
    setImageSlider(false);
    setPhotoPage(true);
  }

  function reArrangePhotoArray() {
    const rearrangedArray = [...photoArray.slice(openPhotoIndex), ...photoArray.slice(0, openPhotoIndex)];
    setPhotoArray(rearrangedArray);
  }

  useEffect(() => {
    reArrangePhotoArray();
  }, [openPhotoIndex]);



  async function NewAlbumFormSubmitHandler(e) {
    e.preventDefault();
    await addDoc(collection(db, "Albums"), {
      title: albumObj.title,
      photos: [{ title: "", link: "" }]
    });
    setAlbumObj({ title: "", photos: [] });
    getAllCollections()
  }

  async function getAllCollections() {
    const querySnapshot = await getDocs(collection(db, "Albums"));
    const albumsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAlbumsArray(albumsData);
  }

  useEffect(() => {
    getAllCollections();
  }, [])


  async function deleteBtnHandler(obj) {

    const washingtonRef = doc(db, "Albums", albumID);
    await updateDoc(washingtonRef, {
      photos: arrayRemove(obj)
    });

    const newPhotoArray = photoArray.filter(photo => photo.link != obj.link);
    setPhotoArray(newPhotoArray);
    const newSearchResultArray = searchResultsArray.filter(photo => photo.link != obj.link);
    setSearchResultsArray(newSearchResultArray);
  }



  return (
    <>
      <Navbar />

      {homePage ? <HomePage

        albumObj={albumObj}
        setAlbumObj={setAlbumObj}
        NewAlbumFormSubmitHandler={NewAlbumFormSubmitHandler}
        albumsArray={albumsArray}
        setPhotoArray={setPhotoArray}
        setHomePage={setHomePage}
        setPhotoPage={setPhotoPage}
        setAlbumID={setAlbumID}
        setAlbumName={setAlbumName}

      /> : null}

      {imageSlider ? <ImageSlider

        photoArray={photoArray}
        cancelButtonHandler={cancelButtonHandler}
        searchResultsArray={searchResultsArray}

      /> : null}


      {photoPage ? <PhotoPage
        deleteBtnHandler={deleteBtnHandler}
        searchResultsArray={searchResultsArray}
        setSearchInput={setSearchInput}
        setImageSlider={setImageSlider}
        photoArray={photoArray}
        setHomePage={setHomePage}
        setPhotoPage={setPhotoPage}
        photoObj={photoObj}
        setPhotoObj={setPhotoObj}
        NewPhotoFormSubmitHandler={NewPhotoFormSubmitHandler}
        albumName={albumName}
        setOpenPhotoIndex={setOpenPhotoIndex}
        albumID={albumID}

      /> : null}

    </>
  );
}

export default App;
