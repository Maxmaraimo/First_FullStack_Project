import { useEffect } from "react";
import { isLoggedIn } from "../conf/common";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function AuthControl(Component) {
    return function AuthenticatedComponent(props) {
        const navigate = useNavigate()

        useEffect(() => {
            if (!isLoggedIn()) {
                toast("You are not logged in!", { toastId: '1'})
                navigate('/auth')
            }
        }, [navigate])

        return <Component {...props} />
    }
}
