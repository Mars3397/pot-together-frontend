import axios from "axios";
import API from "api";

export const GetAllRecords = async () => {
    const response = await axios({
        method: "GET",
        url: API.records,
    });
    return response.data;
}

export const GetAllRoomRecords = async (roomID: number) => {
    const response = await axios({
        method: "GET",
        url: `${API.rooms}/${roomID}/records`,
    });
    return response.data;
}

interface AddRecordData {
    roomID: number;
    potID: string;
    ingredientID: number;
}

export const AddRecord = async (data: AddRecordData) => {
    const response = await axios({
        method: "POST",
        url: `${API.records}`,
        data,
    });
    return response.data;
}

interface FinishRecordData {
    recordID: number;
    formData: FormData;
}

export const FinishRecord = async (data: FinishRecordData) => {
    const response = await axios({
        method: "PATCH",
        url: `${API.records}/${data.recordID}`,
        headers: { "Content-Type": "multipart/form-data" },
        data: data.formData,
    });
    return response.data;
}
