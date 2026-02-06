"use client";
import { useState } from "react";

function FormPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white/90 shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-700 drop-shadow">ลงทะเบียนเข้าสู่ระบบ</h1>
        <p className="text-center text-gray-600 mb-6">กรุณากรอกข้อมูลของคุณ</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">รหัสผ่าน</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="กรอกรหัสผ่าน"
              className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200 text-lg"
          >
            ลงทะเบียน
          </button>
        </form>

        {submitted && (
          <div className="mt-6 text-center text-green-600 text-lg animate-fade-in">
            ✅ ลงทะเบียนสำเร็จ!<br />
            <span className="text-gray-700">Email: {email}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormPage;