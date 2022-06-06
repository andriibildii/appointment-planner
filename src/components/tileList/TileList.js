import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = ({ tiles, removeAppointment, removeContact }) => {
	return (
		<div className="tileList">
			{tiles.map((tile, index) => (
				<Tile
					key={index}
					tile={tile}
					removeAppointment={removeAppointment}
					removeContact={removeContact}
				/>
			))}
		</div>
	);
};