import Modal from "../../Ui/Modal";
import { HiOutlinePlus, HiOutlineSearch } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "./studentSlice";
import { useEffect, useState } from "react";

function AddStudent({ open, edit, selectedStudent, setOpen,createStudent }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({defaultValues:{
        name: selectedStudent?.name || "",
        email: selectedStudent?.email || "",
        age: selectedStudent?.age || "",
        grade: selectedStudent?.grade || "",
        gender: selectedStudent?.gender || "",
        notes: selectedStudent?.notes || "",
        parentEmail: selectedStudent?.parentEmail || "",
        parentPhone: selectedStudent?.parentPhone || "",
      }
    }
  );
  useEffect(() => {
    if (edit && selectedStudent) {
      reset(
   selectedStudent
      );
    } else {
      reset({
        name: "",
        age: "",
        email: "",
        grade: "",
        gender: "",
        notes: "",
        parent_mail: "",
        parent_Phone: "",
        // other fields...
      });
    }
  }, [edit, selectedStudent, reset]);

  function handleSubmitForm(data) {
    console.log("Form Data:", data);
    if (edit && selectedStudent?.id) {
      // If in edit mode, dispatch update action
      dispatch(updateStudent({ studentId: selectedStudent.id, formData: data }))
        .unwrap()
        .then(() => {
          reset(); // Clear form on success
        })
        .catch((err) => {
          console.error("Failed to update student:", err);
        });
      setOpen(false); // Close the modal after submission
    } else {
      dispatch(addStudent(data))
        .unwrap()
        .then(() => {
          reset(); // Clear form on success
        })
        .catch((err) => {
          console.error("Failed to add student:", err);
        });
      setOpen(false); // Close the modal after submission
    }
  }
  // You can also dispatch an action to add the student to the store if using Redux

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold"> Students</h1>
            <span className="text-md  text-gray-500">
              Manage your student roster and curriculum
            </span>
          </div>
          <button
            onClick={createStudent}
            className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
          >
            <HiOutlinePlus />
            <span>Create Student</span>
          </button>
        </div>
        <SearchInput />

        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Create Student</h2>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              placeholder="Full Name"
              className="border p-2 mb-4 w-full"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
            <input
              type="text"
              {...register("email", { required: "email is required" })}
              placeholder="Email"
              className="border p-2 mb-4 w-full"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <input
              type="text"
              {...register("grade", { required: "grade is required" })}
              placeholder="Grade"
              className="border p-2 mb-4 w-full"
            />
            {errors.grade && (
              <span className="text-red-500">{errors.grade.message}</span>
            )}
            <input
              type="text"
              {...register("age", { required: "age is required" })}
              placeholder="Age"
              className="border p-2 mb-4 w-full"
            />
            {errors.age && (
              <span className="text-red-500">{errors.age.message}</span>
            )}
            <input
              type="text"
              {...register("gender", { required: "gender is required" })}
              placeholder="Gender"
              className="border p-2 mb-4 w-full"
            />
            {errors.gender && (
              <span className="text-red-500">{errors.gender.message}</span>
            )}
            <input
              type="text"
              {...register("notes", { required: "Note  is required" })}
              placeholder="Notes"
              className="border p-2 mb-4 w-full"
            />
            {errors.notes && (
              <span className="text-red-500">{errors.notes.message}</span>
            )}
            <input
              type="text"
              {...register("parentEmail", {
                required: "Parent Email  is required",
              })}
              placeholder="Parent Email"
              className="border p-2 mb-4 w-full"
            />
            {errors.parentEmail && (
              <span className="text-red-500">{errors.parentEmail.message}</span>
            )}
            <input
              type="text"
              {...register("parentPhone", {
                required: "Parent Phone  is required",
              })}
              placeholder="Parent Phone"
              className="border p-2 mb-4 w-full"
            />
            {errors.parentPhone && (
              <span className="text-red-500">{errors.parentPhone.message}</span>
            )}
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
}

function SearchInput() {
  return (
    <div className="bg-white p-6 border rounded-2xl border-gray-200">
      <div className="flex items-center w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
        <HiOutlineSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search classess..."
          className="w-full outline-none bg-transparent"
        />
      </div>
    </div>
  );
}

export default AddStudent;
