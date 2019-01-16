import React from 'react';
import styled from 'styled-components';
import HocSelectPanel from './containers/HocSelectPanel';
import ModeSelector from './ModeSelector';
import SelectList from './SelectList';

const SelectPanel = ({ selections, actions }) => {
  const { multiMode, singleMode, selectedTrucks } = selections;
  
	return (
		<Panel>
      <Title>Select your truck</Title>
      
      <ModeSelector
          multiMode={multiMode}
          singleMode={singleMode}
          selectMode={actions.selectMode}/>

      <SelectList
        selections={selections}
        selectTrucks={actions.selectTrucks}/>

      <SelectedTrucks>Selected trucks: <br/> {selectedTrucks.join(", ")}</SelectedTrucks>

      <Button disabled={selectedTrucks.length === 0}>Continue</Button>
		</Panel>
	);
}

export default HocSelectPanel(SelectPanel);

const Panel = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 60px 30px 40px;
  background: #a5a5a5;
  @media screen and (max-width: 650px){
    padding: 80px 20px 40px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  align-self: flex-start;
  margin-bottom: 30px;
  @media screen and (max-width: 650px){
    align-self: center;
    text-align: center;
  }
`;

const SelectedTrucks = styled.p`
  width: 40vw;
  text-align: center;
  margin-top: 60px;
  font-size: 28px;
  color: #fff;
  @media screen and (max-width: 992px){
    width: 80vw;
  }
  @media screen and (max-width: 650px){
    margin-top: 30px;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 30px;
  margin-top: 20px;
  border: none;
  font-size: 24px;
  transition: all .3s;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.disabled ? '#fff' : '#000'};
  background: ${props => props.disabled ? '#4a4a4a' : '#fff'};
  &:hover {
    color: ${props => props.disabled ? '#fff' : '#fff'};
    background: ${props => props.disabled ? '#4a4a4a' : '#0015d2'};
  }
  &:focus {
    color: ${props => props.disabled ? '#fff' : '#fff'};
    background: ${props => props.disabled ? '#4a4a4a' : '#0015d2'};
    outline: none;
  }
`;