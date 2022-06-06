import React from "react";
import { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
	contacts,
	appointments,
	addAppointment,
	removeAppointment,
}) => {
	const [title, setTitle] = useState("");
	const [contact, setContact] = useState("");
	const [data, setDate] = useState("");
	const [time, setTime] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		addAppointment(title, contact, data, time);
		setTitle("");
		setContact("");
		setDate("");
		setTime("");
	};

	return (
		<div>
			<section>
				<h2>Add Appointment</h2>
				<AppointmentForm
					contacts={contacts}
					title={title}
					setTitle={setTitle}
					setContact={setContact}
					data={data}
					setDate={setDate}
					time={time}
					setTime={setTime}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Appointments</h2>
				<TileList tiles={appointments} removeAppointment={removeAppointment}/>
			</section>
		</div>
	);
};
