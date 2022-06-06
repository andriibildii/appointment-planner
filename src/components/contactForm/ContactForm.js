import React from "react";

export const ContactForm = ({
	name,
	setName,
	phone,
	setPhone,
	email,
	setEmail,
	handleSubmit,
	alert,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				name="name"
				id="nameInput"
			/>
			<input
				type="tel"
				placeholder="Phone +380#########"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				pattern="^\+[0-9]{3}\s\(\d+)\\d{3}\d{2}\d{2}"
				id="phoneInput"
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				name="email"
				id="emailInput"
			/>
			<input type="submit" value="Add Contact" />
			<h2 className="alert">{alert}</h2>
		</form>
	);
};