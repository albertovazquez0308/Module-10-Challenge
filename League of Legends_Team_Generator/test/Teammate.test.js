const Teammate = require('../lib/Teammate');

describe('Teammate test', () => {
    it('Teammate class creates corresponding name', () => {
        const Teammate = new Teammate('Janna', '11', 'Janna_support@gmail.comk');
        expect(Teammate.getName()).toEqual('Janna');
    });
    it('Teammate class creates corresponding id', () => {
        const Teammate = new Teammate('Janna', '11', 'Janna_support@gmail.comk');
        expect(Teammate.getId()).toEqual('11');
    });
    it('Teammate class creates corresponding email', () => {
        const Teammate = new Teammate('Janna', '11', 'Janna_support@gmail.comk');
        expect(Teammate.getEmail()).toEqual('Janna_support@gmail.comk');
    });
});