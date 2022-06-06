import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact, removeContact }) => {
	const [currentName, setCurrentName] = useState("");
	const [currentPhone, setCurrentPhone] = useState("");
	const [currentEmail, setCurrentEmail] = useState("");
	const [duplicate, setDuplicate] = useState(false);
	const [alert, setAlert] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!duplicate) {
			addContact(currentName, currentPhone, currentEmail);
		}
		setCurrentName("");
		setCurrentPhone("");
		setCurrentEmail("");
		setDuplicate(false);
	};

	// Using hooks, check for contact name in the contacts array variable in props
	useEffect(() => {
		for (let contact of contacts) {
			if (contact.text.name === currentName) {
				setDuplicate(true);
				setAlert("Contact is already in the list.");
			} else {
				setAlert("");
			}
		}
	}, [contacts, currentName]);

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm
					name={currentName}
					setName={setCurrentName}
					phone={currentPhone}
					setPhone={setCurrentPhone}
					email={currentEmail}
					setEmail={setCurrentEmail}
					handleSubmit={handleSubmit}
					alert={alert}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList tiles={contacts} removeContact={removeContact}/>
			</section>
		</div>
	);
};
