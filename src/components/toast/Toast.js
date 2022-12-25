import { toast } from "react-toastify";

// success toast 
const ToastSuccess = (data) => toast.success(data);
// error toast 
const ToastError = (data) => toast.error(data);
// warning toast 
const ToastWarning = (data) => toast.warning(data);
// info toast 
const ToastInfo = (data) => toast.info(data);

export {ToastSuccess, ToastError, ToastWarning, ToastInfo};