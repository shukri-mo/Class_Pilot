import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineUsers,
} from "react-icons/hi";
import AddClass from "../Features/Classess/AddClass";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchClasses,
  deleteClass,
} from "../Features/Classess/classSlice";
import { useEffect, useState } from "react";
function Classes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const dispatch = useDispatch();
  const { classes, loading, error } = useSelector((state) => state.classes);
  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this class?")) {
      dispatch(deleteClass(id));
    }
  };
  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedClass(null);
    setIsModalOpen(true);
  };
  const handleEdit = (cls) => {
    setIsEditMode(true);
    setSelectedClass(cls);
    setIsModalOpen(true);
  };

  return (
    <>
      <AddClass
        open={isModalOpen}
        setOpen={setIsModalOpen}
        edit={isEditMode}
        selectedClass={selectedClass}
        create={handleCreate}
      />
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && classes.length === 0 && (
        <p className="text-center text-gray-400">No Classes found.</p>
      )}

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
                  <h1 className="text-lg font-semibold ">{cls.name}</h1>
                  <h2 className="text-lg font-semibold">{cls.gradeLevel}</h2>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <HiOutlineUsers size={15} />
                    <span>{cls.capacity} students</span>
                  </div>
                </div>
              </div>

              {/* Right side: Edit/Delete */}
              <div className="flex gap-6 text-gray-600 hover:cursor-pointer">
                <HiOutlinePencil
                  className="hover:text-blue-600"
                  size={20}
                  onClick={() => handleEdit(cls)}
                />
                <HiOutlineTrash
                  className="text-red-600 cursor-pointer"
                  size={20}
                  onClick={() => handleDelete(cls.id)}
                />
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
                  <button className="text-blue-500 font-medium hover:text-blue-700 cursor-pointer">
                    view Details <span>&rarr;</span>
                  </button>
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
