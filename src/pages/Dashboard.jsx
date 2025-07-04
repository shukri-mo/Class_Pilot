import DashboardCard from "../Features/Dashboard/DashboardCard";

function Dashboard() {
  return (
    <div className="p-6 w-full">
      
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          color="bg-blue-600"
          title="Total Students"
          value="6"
          note="Across all classes"
     
        />
        <DashboardCard
          color="bg-purple-600"
          title="My Classes"
          value="3"
          note="Active this semester"
         
        />
        <DashboardCard
          color="bg-orange-500"
          title="Pending Tasks"
          value="3"
          note="Need attention"
         
        />
        <DashboardCard
          color="bg-green-500"
          title="Class Average"
          value="85%"
          note="This semester"
        

          
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        {/* Left Side: Actions, Recent, Class Overview */}
        <div className="xl:col-span-2 space-y-6">
          {/* Quick Actions */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              + Add New Student
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              + Create New Class
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                View All
              </a>
            </div>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-medium"> New Student Enrolled</p>
                <span className="text-gray-500 block">
                  Ethan Johnson joined 3rd Grade Reading — 3/14/2024 at 05:30 AM
                </span>
              </li>
              <li>
                <p className="font-medium">Class Created</p>
                <span className="text-gray-500 block">
                  4th Grade Science class was created — 3/14/2024 at 04:15 AM
                </span>
              </li>
              <li>
                <p className="font-medium">Assignment Due Soon</p>
                <span className="text-gray-500 block">
                  Math homework due tomorrow — 3/14/2024 at 03:00 AM
                </span>
              </li>
            </ul>
          </div>

          {/* Class Overview */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Class Overview</h2>
              <a href="#" className="text-sm text-blue-600 hover:underline">View All Classes</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg">
                <h3 className="text-orange-600 font-semibold">3rd Grade Mathematics</h3>
                <p className="text-xs text-gray-500 mb-1">3 students</p>
                <p className="text-sm">
                  Advanced mathematics for 3rd grade students focusing on multiplication...
                </p>
              </div>

              <div className="border p-4 rounded-lg">
                <h3 className="text-orange-600 font-semibold">4th Grade Science</h3>
                <p className="text-xs text-gray-500 mb-1">2 students</p>
                <p className="text-sm">
                  Exploring the natural world through hands-on experiments and observations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Calendar Placeholder */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h3 className="font-semibold text-lg mb-2">March 2024</h3>
            {/* Replace with actual calendar library if needed */}
            <p className="text-sm text-gray-500">Calendar component here</p>
          </div>

          {/* Upcoming Reminders */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-3">Upcoming Reminders</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-medium"> Grade Math Tests</p>
                <p className="text-gray-500 text-xs">Due: 3/14/2024</p>
                <span className="text-xs text-red-600 font-semibold">High</span>
              </li>
              <li>
                <p className="font-medium"> Parent-Teacher Conferences</p>
                <p className="text-gray-500 text-xs">Due: 3/17/2024</p>
                <span className="text-xs text-yellow-600 font-semibold">Medium</span>
              </li>
              <li>
                <p className="font-medium"> Update Lesson Plans</p>
                <p className="text-gray-500 text-xs">Due: 3/15/2024</p>
                <span className="text-xs text-yellow-600 font-semibold">Medium</span>
              </li>
            </ul>
          </div>

          {/* Performance Summary */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-3">Performance Summary</h3>
            <p>Average Grade: <strong>B+</strong></p>
            <p>Attendance Rate: <strong>94%</strong></p>
            <p>Assignments Completed: <strong>87%</strong></p>
            <div className="mt-4 bg-indigo-100 text-indigo-700 px-3 py-1 inline-block rounded-full">
              85% Overall
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
