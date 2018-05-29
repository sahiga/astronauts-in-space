import React from 'react';
import {connect} from 'react-redux';

import {
	createLoadDefaultItemsAction,
	createMoveToTargetAction,
	createSetActiveItemAction,
	createSetValidDragAction
} from '../js/actions/creators';

import DnDTarget from './dnd/DnDTarget';
import ItemsList from './dnd/itemsList';

// Home page component
class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.loadDefaultItems();
	}

    // render
    render() {
	    return (
	      <div className="home">
	        <h1 className="title">Send astronauts into space</h1>
	        <div className="inner-container">
		        {!!this.props.defaultItems &&
		        	<div className="left-panel">
		        		<ItemsList
		        			items={this.props.defaultItems}
		        			setActiveItem={this.props.setActiveItem}
		        			moveToTarget={this.props.moveToTarget}
		        		/>
		        	</div>
		        }
		        <DnDTarget
		        	items={this.props.dndItems}
		        	setValidDrag={this.props.setValidDrag}
		        	validDrag={this.props.validDrag}
		        />
		    </div>
	      </div>
	    );
    }
}

const mapStateToProps = (state) => {
	return {
		defaultItems: state.dnd.defaultItems,
		dndItems: state.dnd.dndItems,
		activeItem: state.dnd.activeItem,
		validDrag: state.dnd.validDrag
	};
};

// all action creators will be wrapped into a dispatch call
const mapDispatchToProps = {
	loadDefaultItems: createLoadDefaultItemsAction,
	moveToTarget: createMoveToTargetAction,
	setActiveItem: createSetActiveItemAction,
	setValidDrag: createSetValidDragAction,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
