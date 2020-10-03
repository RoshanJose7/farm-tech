import React, { useState } from 'react';
import MapGL, { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = 'pk.eyJ1Ijoicmpvc2U3IiwiYSI6ImNrZHJpZnRqZDBldDAzNW55NnU3Z2w0OXQifQ.i3qWJtqvr2yPoIHra9QN4g';

const geolocateStyle = {
	float: 'left',
	margin: '50px',
	padding: '10px'
};

const Map = () => {
	const [viewport, setViewPort] = useState({
		width: '100%',
		height: 900,
		latitude: 12.9716,
		longitude: 77.5946,
		zoom: 10
	});

	const _onViewportChange = viewport => {
		setViewPort({ ...viewport, transitionDuration: 3000 });
	};

	return (
		<div id='map'>
			<MapGL
				{...viewport}
				mapboxApiAccessToken={TOKEN}
				mapStyle='mapbox://styles/mapbox/light-v8'
				onViewportChange={_onViewportChange}
			>
				<GeolocateControl
					style={geolocateStyle}
					positionOptions={{ enableHighAccuracy: true }}
					trackUserLocation={true}
				/>
			</MapGL>
		</div>
	);
};

export default Map;
