import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<>
			<h1>Appointment Planner</h1>
			<nav>
				<NavLink to="/contacts">
					Contacts
				</NavLink>
				<NavLink to="/appointments">
					Appointments
				</NavLink>
			</nav>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</>
	);
};