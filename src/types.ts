declare module '*.json' {
    interface Region {
        code: string,
        name: string,
        sub: Region[],
    }

    const regions: Region[];

    export default regions;
}
