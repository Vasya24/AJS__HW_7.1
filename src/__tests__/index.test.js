import { Character } from '../index'

const vasya = new Character('Базелиус', 'Bowman');
test('Params test', () => {
    expect(vasya.attack).toEqual(vasya.defence)
})