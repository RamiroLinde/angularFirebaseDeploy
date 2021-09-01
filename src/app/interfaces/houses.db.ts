import { House } from '../interfaces/house.interface';

export const HOUSES: House[] = [
  {
    id: 1,
    titulo: 'Bonita casa adosada',
    direccion: 'Calle del Almendro 17, 18140',
    ciudad: 'Granada',
    numHabitaciones: 3,
    propietario: 'Don Ramiro',
    disponible: true,
    foto: 'https://media.vrbo.com/lodging/20000000/19750000/19741500/19741411/68d66d29.f10.jpg',
    lat: 1.1,
    long: 2.2,
  },

  {
    id: 2,
    titulo: 'Atico de lujo en el centro',
    direccion: 'Calle Gran via 17, 28013',
    ciudad: 'Madrid',
    numHabitaciones: 3,
    propietario: 'Stephan',
    disponible: false,
    foto: 'https://storage.googleapis.com/static.inmoweb.es/clients/258/property/234918/image/1224_11429811152.jpg?v=20150428173403800',
    lat: 1.1,
    long: 2.2,
  },

  {
    id: 3,
    titulo: 'Piso duplex en Barcelona',
    direccion: 'Avenida de la Ramblas 23, 08028',
    ciudad: 'Barcelona',
    numHabitaciones: 3,
    propietario: 'La Miry',
    disponible: true,
    foto: 'https://www.smartrentalcollection.com/content/imgsxml/galerias/panel_infoapartamentos/1/duplex4dormitorios01898.jpg',
    lat: 1.1,
    long: 2.2,
  },

  {
    id: 4,
    titulo: 'Chalet con vista al Mar',
    direccion: 'Calle de la Rosa 27',
    ciudad: 'Valencia',
    numHabitaciones: 7,
    propietario: 'Rosa Rosae',
    disponible: true,
    foto: 'https://www.cw-casaibiza.es/upload/116759.jpg',
    lat: 1.1,
    long: 2.2,
  },
];
