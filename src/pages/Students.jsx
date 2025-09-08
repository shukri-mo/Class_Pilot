import {
  HiOutlineMail,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import AddStudent from "../Features/Students/AddStudent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,deleteStudent
} from "../Features/Students/studentSlice";
import { formatDate } from "../API/client";

function Students() {
   const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
  const dispatch = useDispatch();

  // Get students, loading, and error from Redux state
  const { students, loading, error } = useSelector((state) => state.students);

  // Fetch students when the component mounts
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(id));
    }
  };
  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedStudent(null);
    setIsModalOpen(true);
  };
  const handleEdit = (st) => {
    setIsEditMode(true);
    setSelectedStudent(st);
    setIsModalOpen(true);
  };

  return (
    <>
      <AddStudent open={isModalOpen} edit={isEditMode} selectedStudent={selectedStudent} setOpen={setIsModalOpen} createStudent={handleCreate} />

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && students.length === 0 && (
        <p className="text-center text-gray-400">No students found.</p>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-4">
        {students.map((st) => (
          <li
            key={st.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-3"
          >
            {/* Top row: icon + name + edit/delete */}
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="w-13 h-13 rounded-full bg-indigo-500 flex items-center justify-center shadow-md">
                  <HiOutlineUser className="text-white" size={30} />
                </div>

                <div className="space-y-1">
                  <h1 className="text-lg font-semibold">{st.name}</h1>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span>{st.age}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 text-gray-600 hover:cursor-pointer">
                <HiOutlinePencil className="hover:text-blue-600" size={20} onClick={()=>handleEdit(st)} />
                <HiOutlineTrash
                  className="text-red-600"
                  size={20}
                  onClick={() => handleDelete(st.id)}
                />
              </div>
            </div>

            {/* Bottom section: email, class, gender, joined */}
            <div className="text-gray-600 space-y-1 mt-2">
              <div className="flex items-center gap-2">
                <HiOutlineMail className="text-indigo-500" size={18} />
                <span>{st.email}</span>
              </div>
            <p>Class: {st.classes?.name || "N/A"}</p>
              <p>Gender: {st.gender}</p>
              <p>Joined: {formatDate(st.created_at)}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Students;
