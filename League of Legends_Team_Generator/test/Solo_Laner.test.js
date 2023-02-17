const Solo_Laner = require('../lib/Solo_Laner');

describe('Solo_Laner test', () => {
    it('Solo_Laner class creates corresponding office number', () => {
        const Solo_Laner = new Solo_Laner('Janna', '11', 'Janna_support@gmail.comk', 5);
        expect(Solo_Laner.getOfficeNumber()).toEqual(5);
    });    
    it('Solo_Laner class creates corresponding name', () => {
        const Solo_Laner = new Solo_Laner('Janna', '11', 'Janna_support@gmail.comk', 5);
        expect(Solo_Laner.getName()).toEqual('Janna');
    });
    it('Solo_Laner class creates corresponding id', () => {
        const Solo_Laner = new Solo_Laner('Janna', '11', 'Janna_support@gmail.comk', 5);
        expect(Solo_Laner.getId()).toEqual('11');
    });
    it('Solo_Laner class creates corresponding email', () => {
        const Solo_Laner = new Solo_Laner('Janna', '11', 'Janna_support@gmail.comk', 5);
        expect(Solo_Laner.getEmail()).toEqual('Janna_support@gmail.comk');
    });
})