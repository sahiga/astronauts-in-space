import React from 'react';

import ItemsList from './ItemsList';

const DnDTarget = (props) => {
	return (
		<div
			className={props.validDrag ? 'dnd-target highlighted' : 'dnd-target'}
			onDragOver={props.setValidDrag.bind(null, true)}
		>
			{!!props.items &&
				<ItemsList
					items={props.items}
					inDnD={true}
				/>
			}
		</div>
	);
};

export default DnDTarget;
