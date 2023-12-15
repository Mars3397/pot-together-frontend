import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Signup, Login } from "api/User";
import { useAuth } from "provider/AuthProvider";

export const useSignup = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();

    return useMutation(Signup, {
        onSuccess: (data) => {
            console.log(data);
            navigate("/login");
        },
        onError: (error) => {
            console.log(error);
        },
    });
}

export const useLogin = () => {
    const navigate = useNavigate();

    return useMutation(Login, {
        onSuccess: (data) => {
            console.log(data);
            navigate("/");
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
