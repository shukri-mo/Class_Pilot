import Modal from "../../Ui/Modal";
import { HiOutlinePlus, HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addClass, updateClass } from "./classSlice";
import { useEffect } from "react";
function Classes({ open, setOpen, edit, selectedClass, create }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: selectedClass?.name || "",
      description: selectedClass?.description || "",
      subject: selectedClass?.subject || "",
      gradeLevel: selectedClass?.gradeLevel || "",
      schedule: selectedClass?.schedule || "",
      capacity: selectedClass?.capacity || "",
    },
  });
  useEffect(() => {
    if (edit && selectedClass) {
      reset(selectedClass);
    } else {
      reset({
        name: "",
        description: "",
        subject: "",
        gradeLevel: "",
        schedule: "",
        capacity: "",
      });
    }
  }, [edit, selectedClass, reset]);
  function handleSubmitForm(data) {
    if (edit && selectedClass?.id) {
      dispatch(updateClass({ classId: selectedClass.id, formData: data }))
        .unwrap()
        .then(() => {
          reset();
          setOpen(false);
        })
        .catch((err) => console.error("Failed to update Class:", err));
    } else {
      dispatch(addClass(data))
        .unwrap()
        .then(() => {
          reset();
          setOpen(false);
        })
        .catch((err) => console.error("Failed to add Class:", err));
    }
  }

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold"> Classes</h1>
            <span className="text-md  text-gray-500">
              Manage your class roster and curriculum
            </span>
          </div>
          <button
            onClick={create}
            className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
          >
            <HiOutlinePlus />
            <span>Create Class</span>
          </button>
        </div>
        <SearchInput />

        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Create Class</h2>
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
              {...register("description")}
              placeholder="Description"
              className="border p-2 mb-4 w-full"
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
            <input
              type="text"
              {...register("subject")}
              placeholder="Subject"
              className="border p-2 mb-4 w-full"
            />
            {errors.subject && (
              <span className="text-red-500">{errors.subject.message}</span>
            )}
            <input
              type="text"
              {...register("gradeLevel", {
                required: "gradeLevel is required",
              })}
              placeholder="Level"
              className="border p-2 mb-4 w-full"
            />
            {errors.gradeLevel && (
              <span className="text-red-500">{errors.gradeLevel.message}</span>
            )}
            <input
              type="text"
              {...register("schedule", { required: "gender is required" })}
              placeholder="schedule"
              className="border p-2 mb-4 w-full"
            />
            {errors.schedule && (
              <span className="text-red-500">{errors.schedule.message}</span>
            )}
            <input
              type="text"
              {...register("capacity", { required: "Note  is required" })}
              placeholder="Capacity"
              className="border p-2 mb-4 w-full"
            />
            {errors.capacity && (
              <span className="text-red-500">{errors.capacity.message}</span>
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

export default Classes;
