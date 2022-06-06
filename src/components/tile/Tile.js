import React from "react";

export const Tile = ({ tile, removeContact, removeAppointment }) => {
	const tileData = tile.text;
	const data = Object.values(tileData);

	const handleRemoveClick = () => {
		const id = tile.id;
		if (tile.text.name || tile.text.phone || tile.text.email) {
			removeContact(id);
		}
		if (tile.text.title || tile.text.contact || tile.text.date || tile.text.time) {
			removeAppointment(id);
		}
	};

	return (
		<>
			<div className="tile-container" id="tileItem">
				<button
					aria-label="Remove thought"
					className="tile-button"
					onClick={handleRemoveClick}
					// onClick2={handleRemoveClick2}
				>
					&times;
				</button>
				{data.map((value, index) => (
					<p className={`${index === 0 ? "tile-title" : ""} tile`} key={index}>
						{value}
					</p>
				))}
			</div>
		</>
	);
};