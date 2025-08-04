import { useState } from "react"
const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleRegister = async (name, email, password) => {
        try {
            const response = await fetch('https://expense-tracker-project-two.vercel.app/api/user/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
            console.log(response)
            const data = await response.json();
            if (data.success) {
                alert("Registration successful!");
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("something went wrong");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister(form.name, form.email, form.password)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e)=>handleChange(e)}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(e)=>handleChange(e)}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={(e)=>handleChange(e)}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register