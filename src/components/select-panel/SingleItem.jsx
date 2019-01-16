import React from 'react';
import styled from 'styled-components';

const SingleItem = ({ truck, handleSelect, isSelected }) => { 
	return (
    <Item onClick={() => handleSelect(truck.name)} isSelected={isSelected}>
      <Name>{truck.name}</Name>
    </Item>
	);
}

export default SingleItem;

const Item = styled.div`
  width: 13vw;
  height: 13vw;
  position: relative;
  border-radius: 50%;
  border: 2px solid #000;
  margin-bottom: 60px;
  background: ${props => props.isSelected ? "#6545ff" : "#fff"};
  cursor: pointer;
  transition: all .3s; 
  z-index: 3;
  &:hover {
    box-shadow: 0 5px 10px 2px;
  }
  @media screen and (max-width: 992px){
    width: 18vw;
    height: 18vw;;
  }
  @media screen and (max-width: 650px){
    width: 35vw;
    height: 35vw;
  }
`;

const Name = styled.p`
  position: absolute;
  width: 100%;
  bottom: -35px;
  left: 50%;
  transform: translate(-50%);
  font-size: 22px;
  text-align: center;
  color: #fff;
  user-select: none;
`;