import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import {
    CreateRoom,
    AllUserRooms,
} from "api/Room";
import {
    APIResponse,
    SimpleRoomInfo,
} from "api";

export const useCreateRoom = () => {
    const navigate = useNavigate();

    return useMutation(CreateRoom, {
        onSuccess: (data) => {
            console.log(data);
            navigate(`/room/${data.data.roomID}`);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}

export const useAllUserRooms = () => {
    return useQuery<APIResponse<SimpleRoomInfo[]>>(
        "allUserRooms", AllUserRooms, {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
