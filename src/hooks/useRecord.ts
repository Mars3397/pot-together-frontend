import { useQuery, useMutation } from "react-query";
import { GetAllRecords, GetAllRoomRecords, AddRecord, FinishRecord } from "api/Record";
import { APIResponse, Ingredient } from "api";

export const useAllRecords = () => {
    return useQuery<APIResponse<Ingredient[]>>(
        "allRecords", GetAllRecords, {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}

export const useAllRoomRecords = (roomID: number) => {
    return useQuery<APIResponse<Ingredient[]>>(
        ["allRoomRecords", roomID],
        () => GetAllRoomRecords(roomID),
        {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            },
        });
}

export const useAddRecord = () => {
    return useMutation(AddRecord, {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}

export const useFinishRecord = () => {
    return useMutation(FinishRecord, {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
