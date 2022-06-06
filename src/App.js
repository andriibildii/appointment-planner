import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { generateId } from "./utilities";
import { Layout } from "./components/layout/Layout";

function App() {
	const defaultContacts = [
		{
			id: generateId(),
			text: {
				name: "John Doe",
				phone: "+380999999999",
				email: "john@gmail.com",
			},
		},

		{
			id: generateId(),
			text: {
				name: "Add Doe",
				phone: "+380666666666",
				email: "add@gmail.com",
			},
		},

		{
			id: generateId(),
			text: {
				name: "Deep Doe",
				phone: "+380505555555",
				email: "deep@gmail.com",
			},
		},

		{
			id: generateId(),
			text: {
				name: "Dap Doe",
				phone: "+380688888888",
				email: "dap@gmail.com",
			},
		},
	];

	// Contacts data
	const [contacts, setContacts] = useState(defaultContacts);
	const addContact = (name, phone, email) => {
		const contact = {
			id: generateId(),
			text: {
				name: name,
				phone: phone,
				email: email,
			},
		};
		setContacts((prev) => [...prev, contact]);
	};
	const removeContact = (contactsIdToRemove) => {
		setContacts((prev) =>
			prev.filter((contact) => contact.id !== contactsIdToRemove)
		);
	};

	// Appointments data
	const [appointments, setAppointments] = useState([]);
	const addAppointment = (title, contact, date, time) => {
		const appointment = {
			id: generateId(),
			text: {
				title: title,
				contact: contact,
				date: date,
				time: time,
			},
		};
		setAppointments((prev) => [...prev, appointment]);
	};
	const removeAppointment = (appointmentIdToRemove) => {
		setAppointments((prev) =>
			prev.filter((appointment) => appointment.id !== appointmentIdToRemove)
		);
	};

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Navigate to="/contacts" />} />
					<Route
						path="contacts"
						element={
							<ContactsPage
								contacts={contacts}
								addContact={addContact}
								removeContact={removeContact}
							/>
						}
					/>
					<Route
						path="appointments"
						element={
							<AppointmentsPage
								appointments={appointments}
								addAppointment={addAppointment}
								removeAppointment={removeAppointment}
								contacts={contacts}
							/>
						}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;