import React from 'react';
import styled from 'styled-components';

const ModeSelector = ({ multiMode, singleMode, selectMode }) => {
	return (
    <Selector>
      <SingleModeButton active={singleMode} onClick={selectMode.selectSingleMode}>
        select single
      </SingleModeButton>
      <MultiModeButton active={multiMode} onClick={selectMode.selectMultiMode}>
        select multi
      </MultiModeButton>
    </Selector>
	);
}

export default ModeSelector;

const Selector = styled.div`
  position: fixed;
  top: 20px;
  right: 10px;
  display: flex;
  flex-flow: row nowrap;
  width: 300px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #000;
  overflow: hidden;
  z-index: 10;
  @media screen and (max-width: 650px){
    right: 50%;
    transform: translateX(50%);
  }
`;

const SingleModeButton = styled.button`
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  padding: 0;
  border: none;
  text-transform: capitalize;
  transition: all .3s;
  background: ${props => props.active ? '#fff' : '#979797'};
  color: ${props => props.active ? '#000' : '#fff'};
  &:focus {
    outline: none;
  }
`;

const MultiModeButton = styled(SingleModeButton)`
  border-left: 1px solid #000;
`;