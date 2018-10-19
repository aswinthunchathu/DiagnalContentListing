const mapToJson = (map) => JSON.stringify([...map]);

const jsonToMap = (jsonStr) => new Map(JSON.parse(jsonStr));

/*This function adds a Map to session storage with the given key
    sessionKey : string,
    key : any,
    data : any
*/
export const cacheMapedData = (sessionKey, key, data) =>{
    let cache = sessionStorage.getItem(sessionKey);

    if(cache && cache !== "" && cache !== undefined){
        cache = jsonToMap(cache);
        cache.set(key, data);
    }else{
        cache = new Map().set(key, data)
    }
    sessionStorage.setItem(sessionKey, mapToJson(cache));
} 

/*This function checks if session storage has hiven item
    sessionKey : string,
    key : any,
*/
export const shouldfetchFromServer = (sessionKey, key) => {
    let cache = sessionStorage.getItem(sessionKey);

    if(cache && cache !== "" && cache !== undefined){
        cache = jsonToMap(cache);
        if(cache.has(key)){
            return cache.get(key);
        }
    }

    return true;
}