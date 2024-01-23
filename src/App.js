// Importing necessary components and Firebase functions
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { db } from "./firebaseInit";
import { doc, collection, addDoc, getDocs, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import PhotoPage from "./components/PhotoList";
import ImageSlider from "./components/ImageSlider";

// Importing React hooks for state management
import { useEffect, useState } from "react";

// Main component function
function App() {

  // State variables for managing album and photo data
  const [albumsArray, setAlbumsArray] = useState([]);
  const [albumObj, setAlbumObj] = useState({ title: "", photos: [] });
  let [photoArray, setPhotoArray] = useState([]);
  const [photoObj, setPhotoObj] = useState({ title: "", link: "" });

  // State variables for managing current album
  const [albumID, setAlbumID] = useState(null);
  const [albumName, setAlbumName] = useState("");

  // State variables for managing the open photo index and search functionality
  const [openPhotoIndex, setOpenPhotoIndex] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [searchResultsArray, setSearchResultsArray] = useState([]);

  // State variables for managing different views in the app
  const [homePage, setHomePage] = useState(true);
  const [photoPage, setPhotoPage] = useState(false);
  const [imageSlider, setImageSlider] = useState(false);

  // Function for handling the submission of a new photo
  async function NewPhotoFormSubmitHandler(e) {
    e.preventDefault();
    const washingtonRef = doc(db, "Albums", albumID);
    await updateDoc(washingtonRef, {
      photos: arrayUnion(photoObj)
    });

    setPhotoArray((prevPhotoArray) => [...prevPhotoArray, photoObj]);
    setPhotoObj({ title: "", link: "" })
  }

  // Function for creating a search result array based on user input
  function createSearchResultArray() {
    if (searchInput == "") {
      return setSearchResultsArray([]);
    }
    const searchResults = photoArray.filter((photo) => {
      return photo.title.toLowerCase().indexOf(searchInput.toLowerCase()) == 0;
    })
    setSearchResultsArray(searchResults);
  }

  // useEffect hook to update search results array when search input changes
  useEffect(() => {
    createSearchResultArray();
  }, [searchInput])


  // Function for handling cancel button in image slider
  function cancelButtonHandler() {
    setImageSlider(false);
    setPhotoPage(true);
  }

  // Function for rearranging the photo array based on open photo index
  function reArrangePhotoArray() {
    const rearrangedArray = [...photoArray.slice(openPhotoIndex), ...photoArray.slice(0, openPhotoIndex)];
    setPhotoArray(rearrangedArray);
  }

  // useEffect hook to rearrange the photo array when openPhotoIndex changes
  useEffect(() => {
    reArrangePhotoArray();
  }, [openPhotoIndex]);


  // Function for handling the submission of a new album
  async function NewAlbumFormSubmitHandler(e) {
    e.preventDefault();
    await addDoc(collection(db, "Albums"), {
      title: albumObj.title,
      photos: [{ title: "", link: "" }]
    });
    setAlbumObj({ title: "", photos: [] });
    getAllCollections()
  }

  // Function for fetching all albums from the database
  async function getAllCollections() {
    const querySnapshot = await getDocs(collection(db, "Albums"));
    const albumsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAlbumsArray(albumsData);
  }

  // useEffect hook to fetch all albums when the component mounts
  useEffect(() => {
    getAllCollections();
  }, [])


  // Function for handling the deletion of a photo
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

  // Render the component
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
