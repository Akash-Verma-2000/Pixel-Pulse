// Functional component for rendering a form to create a new album
export default function NewAlbumForm({ albumObj, setAlbumObj, NewAlbumFormSubmitHandler }) {

    return (
        <>

            {/* Container for the new album form */}
            <div className="my-shadow bg-primary position-fixed  bottom-0 m-2 p-2  rounded-4 z-3 end-0">

                {/* Button to trigger the offcanvas menu */}
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><h3 className="bi bi-folder-plus"></h3></button>

                {/* Offcanvas menu for creating a new album */}
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div className="offcanvas-header">

                        {/* Header with the title for creating a new album */}
                        <div className="d-flex">

                            <h3 className="offcanvas-title text-primary" id="offcanvasWithBothOptionsLabel">Create Ne</h3>
                            <h3 className="offcanvas-title text-secondary" id="offcanvasWithBothOptionsLabel">w Album</h3>

                        </div>

                        {/* Close button for the offcanvas menu */}
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    {/* Body of the offcanvas menu with the form */}
                    <div className="offcanvas-body">
                        {/* Form for creating a new album */}
                        <form onSubmit={NewAlbumFormSubmitHandler}>
                            {/* Input field for the album name */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Album Name</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={albumObj.title}
                                    onChange={(e) => setAlbumObj({ ...albumObj, title: e.target.value })}
                                />

                            </div>

                            {/* Button to submit the form and create the album */}
                            <button className="btn btn-primary">Create Album</button>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}