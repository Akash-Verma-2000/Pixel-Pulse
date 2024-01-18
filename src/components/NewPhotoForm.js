
export default function NewPhotoForm({ photoObj, setPhotoObj, NewPhotoFormSubmitHandler }) {


    return (
        <>
            <div className="my-shadow bg-primary position-fixed  bottom-0 m-2 p-2  rounded-4 z-3 end-0">

                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><h3 className="bi bi-folder-plus"></h3></button>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div className="offcanvas-header">

                        <div className="d-flex">

                            <h3 className="offcanvas-title text-primary" id="offcanvasWithBothOptionsLabel">Add Ne</h3>
                            <h3 className="offcanvas-title text-secondary" id="offcanvasWithBothOptionsLabel">w Photo</h3>

                        </div>

                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <form onSubmit={NewPhotoFormSubmitHandler} >

                            <div className="mb-3">

                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={photoObj.title}

                                    onChange={(e) => setPhotoObj({ title: e.target.value })}
                                />

                                <label htmlFor="exampleInputEmail1" className="form-label">Link</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={photoObj.link}

                                    onChange={(e) => setPhotoObj({ ...photoObj, link: e.target.value })}
                                />

                            </div>

                            <button className="btn btn-primary">Add Photo</button>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}


