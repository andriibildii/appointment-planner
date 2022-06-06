import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) => {
	const getTodayString = () => {
		const [month, day, year] = new Date()
			.toLocaleDateString("en-US")
			.split("/");
		return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				name="title"
				id="titleInput"
			/>
			<input
				type="date"
				placeholder="Date"
				value={date}
				onChange={(e) => setDate(e.target.value)}
				name="date"
				id="dateInput"
			/>
			<input
				type="time"
				min={getTodayString()}
				placeholder="Time"
				value={time}
				onChange={(e) => setTime(e.target.value)}
				name="time"
				id="timeInput"
			/>
			<ContactPicker
				contacts={contacts}
				onChange={(e) => setContact(e.target.value)}
			/>
			<input type="submit" value="Add Appointment" />
		</form>
	);
};
