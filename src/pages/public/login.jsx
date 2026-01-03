import React, { useState } from "react";

const Login = () => {
	const [form, setForm] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Dummy validation
		if (!form.email || !form.password) {
			setError("Email dan password wajib diisi.");
			return;
		}
		setError("");
		// TODO: Tambahkan logika autentikasi di sini
		alert("Login berhasil! (dummy)");
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-car-gray to-car-black">
			<div className="bg-white/90 dark:bg-car-gray p-8 rounded-xl shadow-lg w-full max-w-md border border-primary-100">
				<h2 className="text-2xl font-bold mb-6 text-center text-primary-700 dark:text-primary-400">Login</h2>
				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-car-black dark:text-primary-100 mb-1">
							Email / Username
						</label>
						<input
							type="text"
							id="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white dark:bg-car-gray text-car-black dark:text-primary-100"
							placeholder="Masukkan email atau username"
							autoComplete="username"
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-car-black dark:text-primary-100 mb-1">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={form.password}
							onChange={handleChange}
							className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white dark:bg-car-gray text-car-black dark:text-primary-100"
							placeholder="Masukkan password"
							autoComplete="current-password"
						/>
					</div>
					{error && <div className="text-primary-600 dark:text-primary-300 text-sm">{error}</div>}
					<button
						type="submit"
						className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 rounded-lg transition-colors"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
