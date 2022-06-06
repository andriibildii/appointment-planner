import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
	return (
		<>
			<select name="contactPicker" onChange={onChange}>
				<option defaultValue="none">Select a Contact</option>
				{contacts.map((con, i) => (
					<option value={con.text.name} key={i}>
						{con.text.name}
					</option>
				))}
			</select>
		</>
	);
};
