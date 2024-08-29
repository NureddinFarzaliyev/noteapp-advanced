import toast from "react-hot-toast"

const toastStyle = {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
}

export const errorToast = (message:string) => {
    toast.error(message, toastStyle)
}

export const successToast = (message:string) => {
    toast.success(message, toastStyle)
}