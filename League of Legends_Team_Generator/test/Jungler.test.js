const Jungler = require('../lib/Jungler');

describe('Jungler test', () => {
    it('Jungler class creates corresponding name', () => {
        const Jungler = new Jungler('Janna', '11', 'Janna_support@gmail.comk', 'JannaSmith');
        expect(Jungler.getName()).toEqual('Janna');
    });
    it('Jungler class creates corresponding id', () => {
        const Jungler = new Jungler('Janna', '11', 'Janna_support@gmail.comk', 'JannaSmith');
        expect(Jungler.getId()).toEqual('11');
    });
    it('Jungler class creates corresponding email', () => {
        const Jungler = new Jungler('Janna', '11', 'Janna_support@gmail.comk', 'JannaSmith');
        expect(Jungler.getEmail()).toEqual('Janna_support@gmail.comk');
    });
    it('the github entered is a string', () => {
        const Jungler = new Jungler('Janna', '11', 'Janna_support@gmail.comk', 'JannaSmith');
        expect(Jungler.getGithub()).toEqual('JannaSmith');
    });
    })