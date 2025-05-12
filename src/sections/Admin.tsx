import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (authenticated) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [authenticated]);

  const handleLogin = () => {
    if (input === '77') {
      setAuthenticated(true);
    } else {
      alert('Wrong password!');
    }
  };

  if (!authenticated) {
    return (
      <div
        className="h-screen flex items-center justify-center bg-[#0a192f] text-white px-4"
        data-aos="fade-up">
        <div className="bg-[#112240] p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-sm animate-fade-in">
          <h2 className="text-2xl font-semibold text-center mb-6 tracking-wide">
            Admin Login
          </h2>
          <div className="space-y-4">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#0a192f] text-white border border-[#233554] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter password"
            />
            <button
              onClick={handleLogin}
              className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#0a192f] text-white p-10 animate-fade-in"
      data-aos="zoom-in">
      <h1 className="text-3xl font-bold mb-8 mt-10">My Site Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Messages */}
        <div className="p-6 border border-gray-700 rounded-xl bg-[#112240] shadow-md animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <p>No messages yet.</p>
        </div>

        {/* Project Offers */}
        <div className="p-6 border border-gray-700 rounded-xl bg-[#112240] shadow-md animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Project Offers</h2>
          <p>No offers yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
