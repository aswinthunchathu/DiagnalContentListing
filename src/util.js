const mapToJson = (map) => JSON.stringify([...map]);

const jsonToMap = (jsonStr) => new Map(JSON.parse(jsonStr));

/*This is a Decorator function for caching
@func : async function
@sessionKey : string
*/
export const cachingDecorator = (func, sessionKey) => (key) => {
    let cache = sessionStorage.getItem(sessionKey);

    if (cache && cache !== "" && cache !== undefined) {
        cache = jsonToMap(cache);

        if (cache.has(key)) {
            return cache.get(key);
        }
        
    } else {
        cache = new Map();
    }

    let result = func.call(this, key);
    
    result.then(
        res => {
            cache.set(key, res);
            sessionStorage.setItem(sessionKey, mapToJson(cache));
        }
    )

    return result;
}
