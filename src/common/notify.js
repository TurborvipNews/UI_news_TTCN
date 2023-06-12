import { toast } from 'react-toastify';
const notify = (type, msg) => toast[type](msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
export default notify