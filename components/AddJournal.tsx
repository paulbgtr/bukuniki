// Description: The Add Journal "+" button for the New Journal component.

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddJournal = () => {
  const notify = () =>
    toast("Journal Added!", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <>
      <button
        onClick={notify}
        className="rounded-full bg-pink-300 px-4 pt-1 pb-2 text-3xl text-white hover:opacity-70 duration-300"
      >
        +
      </button>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default AddJournal;
