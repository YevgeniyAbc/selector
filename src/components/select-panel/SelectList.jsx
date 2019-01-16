import React from 'react';
import styled from 'styled-components';
import trucks from '../../trucks';
import SingleItem from './SingleItem';

const SelectList = ({ selections, selectTrucks }) => { 
  
  const handleSelect = (truck) => {
    const selectedTrucks = selections.selectedTrucks;
    const isSelected = selectedTrucks.includes(truck);
    
    if(isSelected) {
      const index = selectedTrucks.indexOf(truck);
      selectedTrucks.splice(index, 1);
      selectTrucks(selectedTrucks);
      return false
    } else if(selections.singleMode) {
      selectTrucks([truck])
    } else {
      selectedTrucks.push(truck);
      selectTrucks(selectedTrucks);
    }
  }
      
	return (
    <List>
      {trucks.map((truck, i) => {
        return <SingleItem 
                  key={`truck${i}`} 
                  truck={truck} 
                  handleSelect={handleSelect}
                  isSelected={selections.selectedTrucks.includes(truck.name)}/>
      })}
      <BgLineTop/>
      <BgLineBot/>
    </List>
	);
}

export default SelectList;

const List = styled.div`
  width: 60vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 992px){
    width: 80vw;
  }
`;


const BgLineTop = styled.div`
  position: absolute;
  left: 5%;
  top: 5vw;
  width: 90%;
  height: 3vw;
  background: #525252;
  @media screen and (max-width: 992px){
    top: 7.5vw;
  }
  @media screen and (max-width: 650px){
    display: none;
  }
`;

const BgLineBot = styled(BgLineTop)`
  top: auto;
  bottom: calc(5vw + 60px);
  @media screen and (max-width: 992px){
    top: auto;
    bottom: calc(7.5vw + 60px);
  }
`;