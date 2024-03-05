import "./Body.css"
function Body() {
    return (
        <div className="main-body">
            <div className="image">
                <img id="img" src="https://media.gettyimages.com/id/1309451372/photo/cute-girl-embracing-mother-at-home.jpg?s=612x612&w=0&k=20&c=5k3VLhIqkK1u6gzekwEOZRPCuKylOmnFQvwOCXT2q3A=" width="100%" height="500px" />
            </div>
            <div className="body-middle">
                <h4>Think Health. Think Massage.</h4>
                <p>We are open 9am to 6pm; Monday Through Sunday. If you would like to schedule an appoinment
                    with us, Please call us on 74876438736 today!</p>
                <div className="buttons" style={{ display: "flex", gap: "20px" }}>
                    <button style={{ backgroundColor: "brown", color: "white", padding: "10px" }}>LEARN ABOUT US</button>
                    <button style={{ backgroundColor: "brown", color: "white", padding: "10px" }}>CONTACT US TODAY</button>
                </div>
            </div>
            <div className="body-bottom">
                <p style={{color:"brown"}}>
                    Health is the state of complete physical, mental, and social well-being and not merely the absence of disease, or infirmity. Wellness is an active process.
                    through which people become aware of, and make choices toward, a more successful existence.
                </p>
                <p>
                    Health is the state of complete physical, mental, and social well-being and not merely the absence of disease, or infirmity. Wellness is an active process.
                    through which people become aware of, and make choices toward, a more successful existence.
                </p>
                <p>
                    Health is the state of complete physical, mental, and social well-being and not merely the absence of disease, or infirmity. Wellness is an active process.
                    through which people become aware of, and make choices toward, a more successful existence.
                </p>
            </div>
            <hr></hr>
            <div className="bottom" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{color:"brown"}}>Family Wellness Massage Therapy</h4>
            <p>Mohali,Kharar,City Heart,140301</p>
            <p>Phone:9847137</p>

            </div>
           
        </div>
    )
}

export default Body;