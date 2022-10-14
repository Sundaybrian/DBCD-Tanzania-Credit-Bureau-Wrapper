// This can live anywhere in your codebase:
export function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}


export const isArray = function (a: any) {
    return (!!a) && (a.constructor === Array);
};


export const isObject = function (a: any) {
    return (!!a) && (a.constructor === Object);
};