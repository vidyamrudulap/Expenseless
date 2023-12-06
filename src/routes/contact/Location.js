
//Leaflet
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const Location = () => {
    return (
        <article className="location">
            <h3>Our <span className="highlight-title">locations</span></h3>
            <p>Where we are</p>
            <section className="location-content">
                <section className="locations-list">
                    <section>
                        <h4>
                            Visakhapatnam
                        </h4>
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Visakhapatnam,+Andhra+Pradesh/@17.7364368,82.0792687,9z/data=!3m1!4b1!4m6!3m5!1s0x3a39431389e6973f:0x92d9c20395498468!8m2!3d17.6868159!4d83.2184815!16zL20vMDFqbXBm?entry=ttu">View Map</a>
                    </section>

                </section>

            </section>
        </article>
    )
}

export default Location;