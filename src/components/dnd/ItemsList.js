import React from 'react';

import Item from './Item';

const ItemsList = (props) => {
	const itemsListClassName = props.inDnD ? 'dnd-items-list' : 'default-items-list';
	return (
		<ul className={itemsListClassName}>
			{props.items.map((item) => {
				return (
					<Item
						item={item}
						inDnD={props.inDnD}
						key={item.name}
						setActiveItem={props.setActiveItem}
						moveToTarget={props.moveToTarget}
					/>
				);
			})}
		</ul>
	);
};

export default ItemsList;
