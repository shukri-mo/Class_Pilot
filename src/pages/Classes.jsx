import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineUsers,
} from "react-icons/hi";
import AddClass from "../Features/Classess/AddClass";
function Classes() {
  // const classes = [
  //   { id: 1, name: "3RD Grade Mathematics" },
  //   { id: 2, name: "Science 201" },
  //   { id: 3, name: "physics 201" },
  //   { id: 4, name: "chemistry 201" },
  // ];

  const classes = [
    {
      name: "Mathematics",
      description: "advanced mathematics for 3rd grade, student focusing on multiplication,..",
      subject: "Mathematics",
      gradeLevel: "5th Grade",
      schedule: "1/9/24",
      capacity: 30,
    },
    {
      name: "Science",
      description: "Introduction to Earth and Introduction to Earth",
      subject: "Science",
      gradeLevel: "6th Grade",
      schedule: "1/9/24",
      capacity: 25,
    },
    {
      name: " Writing",
      description: "Develop storytelling and composition skills",
      subject: "English",
      gradeLevel: "7th Grade",
      schedule: "1/9/24",
      capacity: 20,
    },

  ];

  return (
    <>
      <AddClass />

<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-4">
        {classes.map((cls) => (
          <li
            key={cls.id}
className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-3"
          >
            {/* Top row: icon + title + edit/delete */}
            <div className="flex items-start justify-between">
              {/* Left side: Icon and info */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-md bg-indigo-500 flex items-center justify-center shadow-md">
                  <HiOutlineBookOpen className="text-white" size={20} />
                </div>

                <div className="space-y-1">
                  <h1 className="text-lg font-semibold ">
                    {cls.name}
                  </h1>
                  <h2 className="text-lg font-semibold">
                     {cls.gradeLevel}
                  </h2>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <HiOutlineUsers size={15} />
                    <span>{cls.capacity} students</span>
                  </div>
                </div>
              </div>

              {/* Right side: Edit/Delete */}
              <div className="flex gap-6 text-gray-600 hover:cursor-pointer">
                <HiOutlinePencil className="hover:text-blue-600" size={20} />
                <HiOutlineTrash className="text-red-600" size={20} />
              </div>
            </div>

            {/* Bottom: Description, Subject, Schedule */}
            <div className=" text-gray-600 space-y-1 mt-2">
              <p>{cls.description}</p>
              <div className="flex justify-between mt-4">

              <div className="flex items-center gap-1 text-sm text-gray-500">
                <HiOutlineCalendar size={15} />
                <span>{cls.schedule}</span>
              </div>
                <div className="flex flex-end">
                  <button className="text-blue-500 font-medium hover:text-blue-700 cursor-pointer">view Details <span>&rarr;</span></button>
                </div>
              </div>
             
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Classes;
