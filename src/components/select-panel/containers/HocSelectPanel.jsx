import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectMode from '../../../actions/selectMode';
import selectTrucks from '../../../actions/selectTrucks';

const HOCSelectPanel = (WrappedComponent) => {

  class HOCSelectPanelConnect extends Component {
    
    render() {	
      const { selections, actions} = this.props;
        
      return <WrappedComponent
                selections={selections}
                actions={actions}/>;
    }
  }

  const mapStateToProps = (state) => {
    const selections = state.selections;
    return {selections};
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: {
        selectMode: bindActionCreators({...selectMode}, dispatch),
        selectTrucks: bindActionCreators(selectTrucks, dispatch),
      }
    }
  }
  
  return HOCSelectPanelConnect = connect(mapStateToProps, mapDispatchToProps)(HOCSelectPanelConnect);
};

export default HOCSelectPanel;