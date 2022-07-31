import * as SQLite from 'expo-sqlite';
import { Place } from '../components/Class';

const database = SQLite.openDatabase('places.db')

export function init() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS Places(
                id INTEGER NOT NULL
                title TEXT NOT NULL
                imageUri TEXT NOT NULL
                lat REAL NOT NULL
                lng REAL NOT NULL
                )`,
                [],
                () => {
                    resolve()
                },
                (_, error) => {
                    reject(error)
                }
            )
        })
    })
    return promise;
}

export function insertPlace(Place) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `INSERT DATA into places (title, imageUri, lat, lng) VALUES (?, ?, ?, ?)`,
                [
                    Place.title,
                    Place.imageUri,
                    Place.location.lat,
                    Place.location.lng
                ],
                (_, result) => {
                    console.log(result)
                    resolve(result);
                },
                (_, error) => {
                    reject(error)
                }
            );
        })
    });
    return promise;
};

export function fetchPlaces() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM Places(title, imageUri, lat, lng) VALUE (?,?,?,?)`, 
                [],
                (_, result) => {
                    const places = []
                    for (const dp of result.rows._array) {
                        places.push(
                            new Place(dp.title, dp.imageUri, {
                                 lat: dp.lat,
                                 lng: dp.lng
                                },
                                dp.id
                            )
                        )
                    }
                    resolve(places);
                },
                (_, error) => {
                    reject(error)
                }
            
            )
        })
    })  
    return promise;
};

export function fetchPlaceDetials(id) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM places WHERE id = ?', 
                [id],
                (_, result) => {
                    const place= []
                    for (const dp of result.rows._array) {                 
                        place.push(
                            new Place(
                                dp.title, dp.imageUri, {
                                lat: dp.location.lat,
                                lat: dp.location.lng
                                }
                            )
                        )
                    }
                    // console.log(result)
                    resolve(place);
                },
                (_, error) => {
                    reject(error)
                }
            )
        })
    })
}
