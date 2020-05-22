import { Character, Bowman, Swordsman, Undead, Zombie, Magician, Daemon } from '../index'

const vasya = new Bowman('Базелиус');
test('Params test', () => {
    expect(vasya.attack).toEqual(vasya.defence)
})