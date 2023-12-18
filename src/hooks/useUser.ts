import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Signup, Login, GetOverview } from "api/User";
import { useAuth } from "provider/AuthProvider";
import {
    APIResponse,
    LevelInfo,
    RecordWithImage,
    DailyLength,
} from "api";

export const useSignup = () => {
    const navigate = useNavigate();

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
    const { setToken } = useAuth();

    return useMutation(Login, {
        onSuccess: (data) => {
            console.log(data);
            setToken(data.data); // set token to local storage
            navigate("/");
        },
        onError: (error) => {
            console.log(error);
        },
    });
}

/**
 * structure for GetOverview response
 * @field userID: user id
 * @field level: level info
 * @field today: today's cooking records
 * @field week: this week's daily accumulated cooking time
 * @field month: this month's daily accumulated cooking time
 */
interface GetOverviewResponse {
    userID: number;
    level: LevelInfo;
    today: RecordWithImage[];
    week: DailyLength[];
    month: DailyLength[];
}

export const useGetOverview = () => {
    return useQuery<APIResponse<GetOverviewResponse>>(
        "overview", GetOverview, {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
