import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import {
    CreateRoom,
    AllUserRooms,
    RoomInfo,
} from "api/Room";
import {
    APIResponse,
    SimpleRoomInfo,
    RoomInfo as RoomInfoType,
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

export const useGetRoomInfo = (roomID: number) => {
    return useQuery<APIResponse<RoomInfoType>>(
        ["roomInfo", roomID], () => RoomInfo(roomID), {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}