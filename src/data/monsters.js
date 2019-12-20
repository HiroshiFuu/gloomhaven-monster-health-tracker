import monsterStats from './monster_stats';

export const getMonsters = () =>
    Object.keys(monsterStats.monsters)
        .map(x => {
            let monster = {...monsterStats.monsters[x]}
            monster.level = monster.level.slice(1)
            return ({
                name: x,
                ...monster
            })
        });

export const getMonsterObject = (id, name, level, number, elite) => {
    const monster = {...monsterStats.monsters[name]}
    monster.level = monster.level.slice(1)
    const levelInfo = elite ? monster.level[level].elite : monster.level[level].normal

    return {
        id,
        name,
        number,
        elite,
        hp: levelInfo.health,
        move: levelInfo.move,
        attack: levelInfo.attack,
        range: levelInfo.range,
        attributes: levelInfo.attributes,
        effects: []
    };
}