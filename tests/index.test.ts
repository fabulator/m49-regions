import regions from '../src';

describe('Regions', () => {
    it('load list of countries', () => {
        expect(regions).toBeDefined();
        expect(typeof regions).toEqual('object');
    });

    it('load world as root element', () => {
        expect(regions[0].name).toEqual('World');
    });
});
