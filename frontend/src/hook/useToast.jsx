import {toast} from "react-toastify"

const useToast = (message, status = null)=> {
    if(!status){
        toast.success(message,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
        })
    } else if (status === "error"){
        toast.error(message,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
        })
    }
};

export default useToast;