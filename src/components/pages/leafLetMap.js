import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Search = (props) => {
  const map = useMap(); // access to leaflet map
  const { provider } = props;

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider,
    });

    map.addControl(searchControl); // this is how you add a control in vanilla leaflet
    return () => map.removeControl(searchControl);
  }, [props]);

  return null; // don't want anything to show up from this comp
};

class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 10.7367558,
      lng: 106.6133937,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <MapContainer center={position} zoom={this.state.zoom}>
        <Search provider={new OpenStreetMapProvider()} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default SimpleExample;
