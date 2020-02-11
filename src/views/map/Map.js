import React,{useState,useEffect} from 'react';
import { Map, GoogleApiWrapper, Marker ,InfoWindow  } from 'google-maps-react'

function MapContainer (props) {
    const [centerPos, setCenterPos] = useState({})
    const [showingInfoWindow, setShowingInfoWindow] = useState(true)
    const [activeMarker, setActiveMarker] = useState({})


    const mapStyles = {
        width: 'calc(100% - 400px)',
        height: '100%',
    };

    const infoTitle ={
        fontWeight: 'bolder'
    }

    const onMarkerClick = (item, marker, e)=>{
        setActiveMarker(marker)
        setCenterPos(item.position)
        let markerData = props.storeList.filter(store=>{
            return store.properties.name === item.name
        })
        props.getMarkerData(markerData)
    }

    const onInfoClose = ()=>{
        props.resetSearchData('reset')
    }

    useEffect(()=>{
        setCenterPos(props.storeList[0]&&props.storeList[0].geometry&&props.storeList[0].geometry.position)
    },[props.storeList])

    return (
        <Map
            google={ props.google }
            zoom={ 18 }
            style={ mapStyles }
            initialCenter={ centerPos }
            center={centerPos}
        >
            {
                props.storeList.map(({properties,geometry},idx)=>{
                    return(
                        <Marker
                            key={idx}
                            id={idx}
                            position={{ lat: geometry.coordinates[1], lng: geometry.coordinates[0]}}
                            onClick={onMarkerClick}
                            name={properties.name}
                            // icon={{
                            //     anchor: new props.google.maps.Point(32,32),
                            //     scaledSize: new props.google.maps.Size(64,64)
                            // }}
                        >
                        </Marker>
                    )
                })
            }
            <InfoWindow
                visible={showingInfoWindow}
                marker={activeMarker}
                onClose = {onInfoClose}
            >
                {
                    activeMarker?
                        <div>
                            <span style={infoTitle}>{activeMarker.name}</span>
                        </div>

                        :""
                }
            </InfoWindow>
        </Map>
    )

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCM8oi4NY9IzC3ntycqsjplsDA75k196i8'
})(MapContainer);
