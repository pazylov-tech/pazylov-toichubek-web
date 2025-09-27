import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsItems } from '../components/Portfolio/Projects/projectsItems.ts';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [showMessages, setShowMessages] = useState(true);
  const [showOffers, setShowOffers] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);

  // password management
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (authenticated) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [authenticated]);

  // Load stored password or fallback to default
  const getStoredPassword = () => {
    return localStorage.getItem('adminPassword') || '77';
  };

  const handleLogin = () => {
    const storedPassword = getStoredPassword();
    if (input === storedPassword) {
      setAuthenticated(true);
    } else {
      alert('Wrong password!');
    }
  };

  const handleExit = () => {
    navigate('/');
  };

  const handleChangePassword = () => {
    const storedPassword = getStoredPassword();

    if (currentPassword !== storedPassword) {
      alert('Current password is incorrect!');
      return;
    }

    if (newPassword.length < 3) {
      alert('New password must be at least 3 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('New password and confirmation do not match.');
      return;
    }

    localStorage.setItem('adminPassword', newPassword);
    alert('Password changed successfully!');

    // reset fields
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setShowChangePassword(false); // collapse after success
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
      <div className="flex justify-between items-center mb-8 mt-10">
        <h1 className="text-3xl font-bold">My Site Dashboard</h1>
        <button
          onClick={handleExit}
          className="bg-red-500 hover:bg-red-700 text-white px-5 py-1 rounded-lg font-medium transition-colors">
          Exit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
        {/* Messages */}
        <div className="p-6 border border-gray-700 rounded-xl bg-[#112240] shadow-md animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Messages</h2>
            <button
              onClick={() => setShowMessages((prev) => !prev)}
              className="text-sm text-blue-400 hover:underline">
              {showMessages ? 'Hide' : 'View'}
            </button>
          </div>
          {showMessages && (
            <div className="space-y-2 transition-all duration-300">
              <p className="text-gray-400">📩 No messages received yet.</p>
            </div>
          )}
        </div>

        {/* Project Offers */}
        <div className="p-6 border border-gray-700 rounded-xl bg-[#112240] shadow-md animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Project Offers</h2>
            <button
              onClick={() => setShowOffers((prev) => !prev)}
              className="text-sm text-blue-400 hover:underline">
              {showOffers ? 'Hide' : 'View'}
            </button>
          </div>
          {showOffers && (
            <div className="space-y-2 transition-all duration-300">
              <p className="text-gray-400">💼 No project offers yet.</p>
            </div>
          )}
        </div>

        {/* Projects */}
        <div
          className="p-6 border border-gray-700 rounded-xl bg-[#112240] shadow-md animate-fade-in"
          data-aos="fade-up">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <button
              onClick={() => setShowProjects((prev) => !prev)}
              className="text-sm text-blue-400 hover:underline">
              {showProjects ? 'Hide' : 'View'}
            </button>
          </div>

          {showProjects && (
            <div className="space-y-3 transition-all duration-300">
              <div>
                <h3 className="text-lg font-medium text-green-400 mb-2">
                  ✅ Finished Projects
                </h3>
                {projectsItems
                  .filter((p) => p.status === 'finished')
                  .map((project) => (
                    <div
                      key={project.slug}
                      className="text-gray-300 border-b border-gray-600 pb-2 mb-2">
                      <p className="font-semibold">{project.title}</p>
                      {project.liveDemoLink && (
                        <a
                          href={project.liveDemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:underline">
                          Visit Site
                        </a>
                      )}
                    </div>
                  ))}
              </div>

              <div>
                <h3 className="text-lg font-medium text-yellow-400 mt-4 mb-2">
                  🚧 In Development
                </h3>
                {projectsItems
                  .filter((p) => p.status === 'in-development')
                  .map((project) => (
                    <div
                      key={project.slug}
                      className="text-gray-300 border-b border-gray-600 pb-2 mb-2">
                      <p className="font-semibold">{project.title}</p>
                      <span className="text-sm italic text-gray-400">
                        Production stage
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Change Password */}
        <div className="p-6 border border-gray-700 rounded-xl bg-[#112240] shadow-md animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Change Password</h2>
            <button
              onClick={() => setShowChangePassword((prev) => !prev)}
              className="text-sm text-blue-400 hover:underline">
              {showChangePassword ? 'Hide' : 'Update'}
            </button>
          </div>

          {showChangePassword && (
            <div className="space-y-3 transition-all duration-300">
              <input
                type="password"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#0a192f] border border-[#233554] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#0a192f] border border-[#233554] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#0a192f] border border-[#233554] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleChangePassword}
                className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium">
                Update Password
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
