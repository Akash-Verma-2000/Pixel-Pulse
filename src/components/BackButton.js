// Importing the CSS styles for the component
import "./Styles.css";

// Functional component for rendering a back button
export default function BackButton({ setHomePage, setPhotoPage }) {

    // Function to handle the click event when the back button is clicked

    function backButtonHandler() {
        // Toggle the state of setHomePage and setPhotoPage to navigate back
        setHomePage((prev) => !prev)
        setPhotoPage((prev) => !prev)
    }

    // Rendering the back button component
    return (
        <>

            <div className="my-shadow bg-primary position-fixed  bottom-0 m-2 p-2  rounded-4 z-3 start-0">
                <button onClick={backButtonHandler} className="btn btn-primary" type="button" aria-controls="offcanvasWithBothOptions"><h3 className="bi bi-box-arrow-left"></h3></button>
            </div>

        </>
    )
}