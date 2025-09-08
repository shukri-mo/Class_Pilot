import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../Features/Authentication/AuthSlice";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  console.log("User ID:" ,user.name);  // ✅ Safe access
  
  return (
    <div className="p-6 w-full space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Profile Settings</h1>
      <p className="text-gray-500">Manage your account information and preferences</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left: Avatar and Name */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold">
            <span>👤</span>
          </div>
          <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <button className="mt-3 px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-700">
            Change Photo
          </button>
        </div>

        {/* Right side content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <button className="text-sm text-blue-600 hover:underline">Edit Profile</button>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Full Name</label>
              <input
                type="text"
                value={user.name}
                disabled
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email Address</label>
              <input
                type="email"
                value={user.email}
                disabled
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h3 className="text-lg font-semibold">Security Settings</h3>
            <div className="flex justify-between items-center border p-4 rounded-md">
              <div>
                <p className="font-medium">Password</p>
                <p className="text-sm text-gray-500">Last changed 3 months ago</p>
              </div>
              <button className="text-sm text-blue-600 hover:underline">Change Password</button>
            </div>
            <div className="flex justify-between items-center border p-4 rounded-md">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
              <button className="text-sm text-blue-600 hover:underline">Enable 2FA</button>
            </div>
          </div>

          {/* Account Management */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-red-200">
            <h3 className="text-lg font-semibold text-red-600 mb-2">Delete Account</h3>
            <p className="text-sm text-red-500 mb-4">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Profile