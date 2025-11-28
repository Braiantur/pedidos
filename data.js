// Barrios disponibles
const BARRIOS = [
    { nombre: "San Tomás", sectores: null },
    { nombre: "Lagartos", sectores: [1,2,3,4,5] }, 
    { nombre: "Mapuche", sectores: null },
    { nombre: "Pueyrredón", sectores: null }, // lo completamos cuando mande el mapa
    { nombre: "La Casualidad", sectores: null } // igual
];

// OBJETO donde después cargamos los LOTES reales
let LOTES = {
    "San Tomás": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "Lagartos": {
        1: [101, 102, 103, 104],
        2: [201, 202, 203, 204],
        3: [301, 302, 303, 304],
        4: [401, 402, 403, 404],
        5: [501, 502, 503, 504]
    },
    "Mapuche": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "Pueyrredón": [],
    "La Casualidad": []
};