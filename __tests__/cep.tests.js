import {fetchCep} from "../index";

beforeAll(() => {
    global.fetch = require("node-fetch");
})

it('should get cep data', () => {
    const spy = jest.spyOn(global.console, 'error')
    return fetchCep('37202506').then(response => {
        expect(response).toStrictEqual({
            "cep": "37202506",
            "city": "Lavras",
            "neighborhood": "Vila Brasília",
            "state": "MG",
            "street": "Avenida Doutor Sílvio Menicucci"
        })
        expect(spy).not.toHaveBeenCalled()
    })
})

it('should not get cep data', () => {
    const spy = jest.spyOn(global.console, 'error')
    return fetchCep('12345678').catch(e => {
        expect(e).toBe('Todos os serviços de CEP retornaram erro.')
        expect(spy).not.toHaveBeenCalled()
    })
})

it('should not get cep data because network error', () => {
    const spy = jest.spyOn(global.console, 'error')
    window.fetch = jest.fn();
    return fetchCep('12345678').catch(e => {
        expect(e).toBeTruthy()
        expect(spy).not.toHaveBeenCalled()
    })
})
