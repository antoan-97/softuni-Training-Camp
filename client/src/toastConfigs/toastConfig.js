import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../src/styles/Tostify.module.css';
import { Bounce } from 'react-toastify';

const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    className: styles.customToast,
};

const notifyError = (message) => {
    toast.error(message, {
        ...toastOptions,
        className: styles.customToastError,
    });
};

const notifySuccess = (message) => {
    toast.success(message, {
        ...toastOptions,
        className: styles.customToastSuccess,
    });
};

export { notifyError, notifySuccess };