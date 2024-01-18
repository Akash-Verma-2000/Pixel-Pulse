

export default function Photo({ deleteBtnHandler, photo, index, setOpenPhotoIndex, setPhotoPage, setImageSlider }) {

    function photoClickHandler() {
        setPhotoPage(false);
        setOpenPhotoIndex(index);
        setImageSlider(true);
    }




    return (<>

        <div className="card my-shadow p-0 col-5 col-md-3 mx-1 my-4 photo-card">
            <img onClick={photoClickHandler} src={photo.link} className="card-img-top" alt="Card Img" />
            <div className="card-body bg-light">
                <p className="card-text bg-light border-0">{photo.title}</p>
                <button onClick={() => deleteBtnHandler(photo)} className="btn z-3 text-danger  position-absolute top-0 end-0" type="button"><h3 class="bi bi-trash"></h3></button>
            </div>
        </div >

    </>)
}