import React from "react"

export default function(props) {
    return (
        <div className="card">
        
        <div className="card-image">
       <img src="https://www.tripsavvy.com/thmb/9XCreCYe7iO9AYyi2bGsaM7u3hY=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fuji-mountain-in-autumn-822273028-5a6a8a9c3418c600363958d3.jpg" className="card-pic"  />
       <img src="https://key0.cc/images/preview/184224_978c08deeb61d81c7e7cc87b3f9f6484.png" className="map-icon"/>
        <p className="japan-text">{props.location}</p>
        <p className="view-map">View on Google Maps</p>
        <div className="mount-container">
             <h3 className="mount-text">Mount Fuji</h3>
        </div>
        <div className="date-container">
             <p className="date-text">12 Jan, 2021 - 24 Jan, 2021</p>
             <p className="mount-desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
        </div>
        
        </div>
            
    )
}


// https://key0.cc/images/preview/184224_978c08deeb61d81c7e7cc87b3f9f6484.png