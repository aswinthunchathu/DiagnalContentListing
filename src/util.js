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
    } else {
        cache = new Map();
    }

    if (cache.has(key)) {
        return cache.get(key);
    }

    let result = func.call(this, key);
    
    result.then(
        res => {
            cache.set(key, res);
            sessionStorage.setItem(sessionKey, mapToJson(cache));
        },
        err => {}
    )

    return result;
}
