// Functional component for rendering a form to add a new photo
export default function NewPhotoForm({ photoObj, setPhotoObj, NewPhotoFormSubmitHandler }) {

    return (
        <>

            {/* Container for the new photo form */}
            <div className="my-shadow bg-primary position-fixed  bottom-0 m-2 p-2  rounded-4 z-3 end-0">

                {/* Button to trigger the offcanvas menu */}
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><h3 className="bi bi-folder-plus"></h3></button>

                {/* Offcanvas menu for adding a new photo */}
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div className="offcanvas-header">

                        {/* Header with the title for adding a new photo */}
                        <div className="d-flex">
                            <h3 className="offcanvas-title text-primary" id="offcanvasWithBothOptionsLabel">Add Ne</h3>
                            <h3 className="offcanvas-title text-secondary" id="offcanvasWithBothOptionsLabel">w Photo</h3>
                        </div>

                        {/* Close button for the offcanvas menu */}
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    {/* Body of the offcanvas menu with the form */}
                    <div className="offcanvas-body">

                        {/* Form for adding a new photo */}
                        <form onSubmit={NewPhotoFormSubmitHandler} >

                            {/* Input field for the photo title */}
                            <div className="mb-3">

                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={photoObj.title}

                                    onChange={(e) => setPhotoObj({ title: e.target.value })}
                                />

                                {/* Input field for the photo link */}
                                <label htmlFor="exampleInputEmail1" className="form-label">Link</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={photoObj.link}
                                    onChange={(e) => setPhotoObj({ ...photoObj, link: e.target.value })}
                                />

                            </div>

                            {/* Button to submit the form and add the photo */}
                            <button className="btn btn-primary">Add Photo</button>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}


