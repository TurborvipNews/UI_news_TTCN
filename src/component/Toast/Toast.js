import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { memo } from 'react'


function Toast({ type, msg }) {
    toast[type](msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    console.log('abc')

    return (
        <div>
            <ToastContainer />
        </div>
    )
}
export default memo(Toast)
