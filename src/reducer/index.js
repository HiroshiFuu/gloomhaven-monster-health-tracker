import { save } from '../state/persist';
import { getMonsterObject } from '../data/monsters';

const convertArrayToObject = (array) => {
    const initialValue = {};
    return array.reduce((obj, item, index) => {
        item.id = index;
        return {
            ...obj,
            [index]: item,
        };
    }, initialValue);
};

export const mainReducer = (state, action) => {
    switch (action.type) {
        case 'take_damage':
            let existingMonster = state.monsters[action.payload.id]
            let newMonster = { ...existingMonster, hp: existingMonster.hp - action.payload.damage };

            if (newMonster.hp <= 0) {
                var monsterClone = { ...state.monsters };
                delete monsterClone[newMonster.id]
                return save({ ...state, monsters: monsterClone })
            } else {
                return save({ ...state, monsters: { ...state.monsters, [newMonster.id]: newMonster } })
            }
        case 'remove_effect':
            return save({
                ...state,
                monsters: {
                    ...state.monsters,
                    [action.payload.id]: {
                        ...state.monsters[action.payload.id],
                        effects: state.monsters[action.payload.id].effects.filter(x => x !== action.payload.effect)
                    }
                }
            })
        case 'add_effect':
                const currentEffects = state.monsters[action.payload.id].effects;

                if(currentEffects.indexOf(action.payload.effect) === -1){
                    currentEffects.push(action.payload.effect)
                }

                return save({
                    ...state,
                    monsters: {
                        ...state.monsters,
                        [action.payload.id]: {
                            ...state.monsters[action.payload.id],
                            effects: currentEffects
                        }
                    }
                })
        case 'add_monster':
            let monsters_values = Object.values(state.monsters);
            let nextId = 0;
            if (monsters_values.length > 0 )
                nextId = monsters_values[monsters_values.length - 1].id + 1;
            const newMonsters = {
                ...state.monsters,
                [nextId]: getMonsterObject(
                    nextId,
                    action.payload.name,
                    action.payload.level,
                    action.payload.number,
                    action.payload.isElite
                )
            };

            let newMonsters_values = Object.values(newMonsters);

            newMonsters_values.sort((a,b) => a.number.localeCompare(b.number));    // sort number
            newMonsters_values.sort((a,b) => (a.elite === b.elite) ? 0 : a ? -1 : 1);    // sort elite
            newMonsters_values.sort((a,b) => a.name.localeCompare(b.name));    // sort name

            return save({
                ...state,
                monsters: convertArrayToObject(newMonsters_values)
            })
        default:
            return state;
    }
};