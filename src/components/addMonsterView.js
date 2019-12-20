import React, {useState} from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { ViewContainer } from './viewContainer';
import { TextButton } from  './button';
import { FormGroup, FormGroupTitle, Input, DropDown, Checkbox } from './form';

import { getState } from '../state'
import { getMonsters } from '../data/monsters';

const StepTitle = styled.h1`
    :first-child {
        padding-top: 0;
        margin-top:0;
    }
    font-family: 'custom-font';
    font-size: 4rem;

    @media only screen and (max-device-width: 812px)  {
        font-size: 3rem;
    }
`;

const MonsterSelectionView = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const MonsterSelectionItem = styled.img`
    width: 120px;
    border: 2px dashed transparent;

    :hover {
        cursor:pointer;
    }

    ${props => 
        props.selected ? `
            border-color: rgba(0, 0, 100, 0.6);
        `
        : ``
    }

    @media only screen and (max-device-width: 812px) {
        width: 70px;
    }
`;

const AddButton = styled(TextButton)`
    margin: 20px auto 5vh auto;
    display: block;
    padding-left: 30px
    padding-right: 30px;
    font-size: 4rem;
    line-height: 4.8rem;
    padding-top: 8px;
    padding-bottom: 0px;

    @media only screen and (max-device-width: 812px) {
        font-size: 2rem;
        line-height: 2.4rem;
        padding-top: 4px;
    }
`;

const AddMonsterView = ({history}) => {
    const [selectedMonster, setSelectedMonster] = useState();
    const [monsterLevel, setMonsterLevel] = useState();
    const [monsterNumbers, setMonsterNumbers] = useState([]);
    const [isElite, setIsElite] = useState(false);

    const [state, dispatch] = getState();

    const addMonster = () => {
        monsterNumbers.forEach(x => {
            dispatch({
                type: 'add_monster',
                payload: {
                    name: selectedMonster.name,
                    level: monsterLevel,
                    number: x,
                    isElite
                }
            });
        });

        history.push('/');
    }

    const duplicateNumbers = selectedMonster && monsterNumbers && monsterNumbers.length
        ? monsterNumbers.filter(x => Object.values(state.monsters).filter(m => m.name === selectedMonster.name && m.number === x).length > 0)
        : [];

    return (
        <ViewContainer>
            <StepTitle>1. 选择怪物</StepTitle>
            <MonsterSelectionView>
                {getMonsters().map(monster => 
                    <MonsterSelectionItem key={monster.name} src={`./images/monsters/Horz-${monster.name}.png`} selected={selectedMonster && selectedMonster.name === monster.name} onClick={() => setSelectedMonster(monster)}/>
                )}
            </MonsterSelectionView>
                
            {selectedMonster && 
                <>
                    <StepTitle>2. 设置属性</StepTitle>

                    <FormGroup>
                        <FormGroupTitle>等级</FormGroupTitle>
                        <DropDown value={monsterLevel} onChange={e => setMonsterLevel(e.target.value)}>
                            {Object.values(selectedMonster.level).map(x => <option key={x.level}>{x.level}</option>)}
                        </DropDown>
                    </FormGroup>

                    <FormGroup>
                        <FormGroupTitle>怪物编号（如有多个用逗号分隔）</FormGroupTitle>
                        <Input value={monsterNumbers} onChange={e => setMonsterNumbers(e.target.value.split(',').map(x => x.trim()))}/>
                    </FormGroup>

                    <Checkbox title="精英?" checked={isElite} onChange={e => setIsElite(e.target.checked)}/>

                    <AddButton onClick={addMonster} disabled={!monsterLevel || monsterNumbers.length === 0 || duplicateNumbers.length !== 0}>添加</AddButton>

                    {duplicateNumbers &&
                        <ul>
                            {duplicateNumbers.map((x,i) => <li key={i}>Number {x} is already used for {selectedMonster.name}</li>)}
                        </ul>
                    }
                </>
            }
            
        </ViewContainer>
    );
}

export default withRouter(AddMonsterView);