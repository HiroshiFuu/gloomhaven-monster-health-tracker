import React from 'react'
import styled from 'styled-components';

import DamageButtons from './damageButtons';
import { Stat, StatsContainer } from './stat';
import { Attribute, AttributeContainer } from './attribute';
import { TokenButton } from './button';
import { Effects } from './effect';

const MonsterWidgetContainer = styled.div`
    font-family: 'pirata-one';
    display: flex;
    flex-direction: column;
    flex-basis: 200px;
    margin: 2px;
    padding: 5px;
    box-sizing: border-box;
    border-width: 2.5px;
    border-style: solid;
    border-image: 
        linear-gradient(
            to bottom, 
            #755E46, 
            rgba(0, 0, 0, 0)
        ) 1 100%;
    border-image-slice: 30 30% 45;
    margin-left: 10px;
    margin-right: 10px;

    :first-child {
        margin-left: 0;
    }

    @media(max-width: 900px) {
        :first-child {
            margin-left: 5px;
        }
        margin-left: 5px;
        margin-right: 0;

        flex-basis: 120px;
    }
`;

const MonsterImage = styled.div`
    padding: 0 20px;
    img {
        width: 100%;
        margin-top: -30px;
    }
`;

const NumberCircle = styled.div`
    background-color: black;
    color: white;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    z-index: 2;
    position: relative;
    margin-left: -24px;
    margin-top: -4px;
    border-width: 4px;
    border-style: solid;
    border-color: ${props => props.elite ? '#efb413' : 'white'};
    font-size: 2rem;

    @media(max-width: 900px) {
        font-size: 1.5rem;
        width: 35px;
        height: 35px;
        line-height: 35px;
    }
`;

const HealthDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-grow: 1;

    span {
        font-size: 2.8em;
        margin-right: 5px;
    }
`;

const MonsterWidget = ({ monster, onDamage, onEffectRemoved, onEffectAdded }) =>
    <MonsterWidgetContainer>
        <MonsterImage>
            <NumberCircle elite={monster.elite}>{monster.number}</NumberCircle>
            <img src={`images/monsters/Horz-${monster.name}.png`} alt="" />
        </MonsterImage>

        <AttributeContainer>
            {monster.attributes.map((x, i) => <Attribute key={i} attributeText={x} />)}
        </AttributeContainer>

        <StatsContainer>
            <Stat>
                <img src="images/icons/attack.png" alt=""/>
                <span>{monster.attack}</span>
            </Stat>
            <Stat>
                <img src="images/icons/range.png" alt="" />
                <span>{monster.range}</span>
            </Stat>
            <Stat>
                <img src="images/icons/move.png" alt="" />
                <span>{monster.move}</span>
            </Stat>
        </StatsContainer>

        <HealthDisplay>
            <span>{monster.hp} hp</span>

            <TokenButton onClick={() => onDamage(-1)}>
                <img src="images/icons/heal.png" alt="" />
            </TokenButton>
        </HealthDisplay>

        <DamageButtons onDamage={onDamage} />

        <Effects effects={monster.effects || []} onEffectRemoved={onEffectRemoved} onEffectAdded={onEffectAdded}/>
    </MonsterWidgetContainer>

export default MonsterWidget;