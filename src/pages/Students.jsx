import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineUsers,
} from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import AddStudent from "../Features/Students/AddStudent";
function Students() {

  const students = [
    {
      name: "Emma Wilson",
      age: "8years old",
      email: "ema.wiltson@student.edu",
      gender: "female",
      joined: "1/9/24",
      class: "6th Grade",
    },
    {
      name: "Emma Wilson",
      age: "8years old",
      email: "ema.wiltson@student.edu",
      gender: "female",
      joined: "1/9/24",
      class: "6th Grade",
    },
    {
      name: "Emma Wilson",
      age: "8years old",
      email: "ema.wiltson@student.edu",
      gender: "female",
      joined: "1/9/24",
      class: "6th Grade",
    },
    {
      name: "Emma Wilson",
      age: "8years old",
      email: "ema.wiltson@student.edu",
      gender: "female",
      joined: "1/9/24",
      class: "6th Grade",
    },
    {
      name: "Emma Wilson",
      age: "8years old",
      email: "ema.wiltson@student.edu",
      gender: "female",
      joined: "1/9/24",
      class: "6th Grade",
    },
    {
      name: "Emma Wilson",
      age: "8years old",
      email: "ema.wiltson@student.edu",
      gender: "female",
      joined: "1/9/24",
      class: "6th Grade",
    },
  ];

  return (
    <>
      <AddStudent />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-4">
        {students.map((st) => (
          <li
            key={st.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-3"
          >
            {/* Top row: icon + title + edit/delete */}
            <div className="flex items-start justify-between">
              {/* Left side: Icon and info */}
              <div className="flex gap-3">
                <div className="w-13 h-13 rounded-full bg-indigo-500 flex items-center justify-center shadow-md">
                  <HiOutlineUser className="text-white" size={30} />
                </div>

                <div className="space-y-1">
                  <h1 className="text-lg font-semibold ">{st.name}</h1>

                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span>{st.age} </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 text-gray-600 hover:cursor-pointer">
                <HiOutlinePencil className="hover:text-blue-600" size={20} />
                <HiOutlineTrash className="text-red-600" size={20} />
              </div>
            </div>

            <div className=" text-gray-600 space-y-1 mt-2">
<div className="flex items-center gap-2 text-gray-600">
  <HiOutlineMail className="text-indigo-500" size={18} />
  <span>{st.email}</span>
</div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <p>Class:{st.class}</p>
                </div>
              </div>
              <p>Class:{st.gender}</p>
              <p>Joined:{st.joined}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Students;
