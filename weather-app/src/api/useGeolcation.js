import {useGeolocated} from 'react-geolocated'



export const useGeolocation = () => {

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        }   ,
        userDecisionTimeout: 5000,
    });

    return coords;
}