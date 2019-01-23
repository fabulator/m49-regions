declare module '*.json' {
    type Region = {
        code: string,
        name: string,
        sub: Array<Region>,
    };

    const regions: Array<Region>;

    export default regions;
}
