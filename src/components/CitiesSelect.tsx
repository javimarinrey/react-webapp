export default function CitiesSelect(props: { cityId: number, citySelected: (id: number) => void }) {

    const cities = [
        {"id": 1, "nombre": "Almería"},
        {"id": 2, "nombre": "Cádiz"},
        {"id": 3, "nombre": "Córdoba"},
        {"id": 4, "nombre": "Granada"},
        {"id": 5, "nombre": "Huelva"},
        {"id": 6, "nombre": "Jaén"},
        {"id": 7, "nombre": "Málaga"},
        {"id": 8, "nombre": "Sevilla"},
        {"id": 9, "nombre": "Huesca"},
        {"id": 10, "nombre": "Teruel"},
        {"id": 11, "nombre": "Zaragoza"},
        {"id": 12, "nombre": "Oviedo"},
        {"id": 13, "nombre": "Palma"},
        {"id": 14, "nombre": "Las Palmas de Gran Canaria"},
        {"id": 15, "nombre": "Santa Cruz de Tenerife"},
        {"id": 16, "nombre": "Santander"},
        {"id": 17, "nombre": "Avila"},
        {"id": 18, "nombre": "Burgos"},
        {"id": 19, "nombre": "León"},
        {"id": 20, "nombre": "Palencia"},
        {"id": 21, "nombre": "Salamanca"},
        {"id": 22, "nombre": "Segovia"},
        {"id": 23, "nombre": "Soria"},
        {"id": 24, "nombre": "Valladolid"},
        {"id": 25, "nombre": "Zamora"},
        {"id": 26, "nombre": "Barcelona"},
        {"id": 27, "nombre": "Girona"},
        {"id": 28, "nombre": "Lleida"},
        {"id": 29, "nombre": "Tarragona"},
        {"id": 30, "nombre": "Badajoz"},
        {"id": 31, "nombre": "Cáceres"},
        {"id": 32, "nombre": "A Coruña"},
        {"id": 33, "nombre": "Lugo"},
        {"id": 34, "nombre": "Ourense"},
        {"id": 35, "nombre": "Pontevedra"},
        {"id": 36, "nombre": "Madrid"},
        {"id": 37, "nombre": "Logroño"},
        {"id": 38, "nombre": "Murcia"},
        {"id": 39, "nombre": "Pamplona"},
        {"id": 40, "nombre": "Vitoria-Gasteiz"},
        {"id": 41, "nombre": "San Sebastián"},
        {"id": 42, "nombre": "Bilbao"},
        {"id": 43, "nombre": "Alicante"},
        {"id": 44, "nombre": "Castellón de la Plana"},
        {"id": 45, "nombre": "Valencia"},
        {"id": 46, "nombre": "Ceuta"},
        {"id": 47, "nombre": "Melilla"},
        {"id": 48, "nombre": "Albacete"},
        {"id": 49, "nombre": "Ciudad Real"},
        {"id": 50, "nombre": "Cuenca"},
        {"id": 51, "nombre": "Guadalajara"},
        {"id": 52, "nombre": "Toledo"}
    ];

    return (
        <select className="form-select" value={props.cityId || -1} onChange={(e)=> props.citySelected(Number(e.target.value)) }>
            {cities.sort((a, b) => {
                if (a.nombre < b.nombre) return -1;
                if (a.nombre > b.nombre) return 1;
                return 0;
            }).map((city, index) => <option key={index} value={city.id}>{city.nombre}</option>)}
        </select>
    )
}