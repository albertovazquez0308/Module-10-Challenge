const Duo_laner = require('../lib/Duo_laner');

describe('Duo_laner test', () => {
    it('Duo_laner class creates corresponding name', () => {
        const Duo_laner = new Duo_laner('Janna', '11', 'Janna_support@gmail.comk', 'UCI');
        expect(Duo_laner.getName()).toEqual('Janna');
    });
    it('Duo_laner class creates corresponding id', () => {
        const Duo_laner = new Duo_laner('Janna', '11', 'Janna_support@gmail.comk', 'UCI');
        expect(Duo_laner.getId()).toEqual('11');
    });
    it('Duo_laner class creates corresponding email', () => {
        const Duo_laner = new Duo_laner('Janna', '11', 'Janna_support@gmail.comk', 'UCI');
        expect(Duo_laner.getEmail()).toEqual('Janna_support@gmail.comk');
    });
    it('Duo_laner class creates corresponding school', () => {
        const Duo_laner = new Duo_laner('Janna', '11', 'Janna_support@gmail.comk', 'UCI');
        expect(Duo_laner.getSchool()).toEqual('UCI');
    });
})