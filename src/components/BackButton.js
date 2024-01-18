import "./Styles.css";

export default function BackButton({ setHomePage, setPhotoPage }) {

    function backButtonHandler() {
        setHomePage((prev) => !prev)
        setPhotoPage((prev) => !prev)
    }
    return (
        <>

            <div className="my-shadow bg-primary position-fixed  bottom-0 m-2 p-2  rounded-4 z-3 start-0">
                <button onClick={backButtonHandler} className="btn btn-primary" type="button" aria-controls="offcanvasWithBothOptions"><h3 className="bi bi-box-arrow-left"></h3></button>
            </div>

        </>
    )
}