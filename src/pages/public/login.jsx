import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError("Email dan password wajib diisi.");
            return;
        }
        setError("");
        // Simulasi Login Berhasil
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 p-4 transition-colors duration-300">
            {/* Tombol Kembali */}
            <Button 
                variant="ghost" 
                onClick={() => navigate("/")} 
                className="absolute top-8 left-8 text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
            </Button>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-slate-800">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Selamat Datang</h2>
                    <p className="text-gray-500 dark:text-slate-400 mt-2">Masuk untuk mengelola AutoStore</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-slate-300 flex items-center gap-2">
                            <Mail size={16} /> Email / Username
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="admin@autostore.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-slate-300 flex items-center gap-2">
                            <Lock size={16} /> Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <Button type="submit" className="w-full py-6 text-lg font-bold shadow-lg shadow-blue-200 dark:shadow-none">
                        Masuk Sekarang
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;