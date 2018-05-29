import React from 'react';

const Item = (props) => {
	if (props.inDnD) {
		return (
			<li
				className="dnd-item"
			>
				{props.item.name}
			</li>
		);
	} else {
		return (
			<li
				className="default-item"
				onDragStart={props.setActiveItem.bind(null, props.item)}
				onDragEnd={props.moveToTarget}
				draggable={true}
			>
				{props.item.name}
			</li>
		);
	}
};

export default Item;
