import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import AsyncSelect from "react-select/async";
import { fetchLocalMapBox } from '../api';
import { OrderLocationData } from './types';

// import { OptionsOrGroups, GroupBase } from 'react-select';




const initialPosition = {
    lat: -8.9048257,
    lng: 13.1599718
    // 17z
}

type Place = {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    }
}
type Props = {
    onChangeLocation: (location: OrderLocationData)=> void;
}

function OrderLocation() {

    const [address, setAddress] = useState<Place>({
        position: initialPosition
    })

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);

        const places = response.data.features.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                }
            });
        });

        // callback(places);
        return places;
    };

    // const loadOptions = async (inputValue: string): Promise<OptionsOrGroups<Place, GroupBase<Place>>> => {
    //     try {
    //         const response = await fetchLocalMapBox(inputValue);
    
    //         if (!response || !response.data || !response.data.features) {
    //             throw new Error("Resposta inválida da API");
    //         }
    
    //         const places = response.data.features.map((item: any) => ({
    //             label: item.place_name,
    //             value: item.place_name,
    //             position: {
    //                 lat: item.center[1],
    //                 lng: item.center[0]
    //             },
    //             place: item.place_name,
    //         }));
    
    //         return places;
    //     } catch (error) {
    //         console.error("Erro ao carregar opções:", error);
    //         return []; // Retorna uma lista vazia em caso de erro
    //     }
    // };

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
        // onChangeLocation({
        //     latitude: place.position.lat,
        //     longitude: place.position.lng,
        //     address: place.label!
        // });
    };

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3>
                    Selecione onde o pedido deve ser entregue:
                </h3>
                <div className="filter-container">
                    <AsyncSelect
                        placeholder="Digite a sua localização"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value =>handleChangeSelect(value as Place)}
                    />
                </div>

                <MapContainer center={address.position} zoom={15} scrollWheelZoom>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>
                            Minha Localização
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )

}

export default OrderLocation;