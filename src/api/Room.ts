import axios from "axios";
import API, {
    SimpleRoomInfo
} from "api";

/** 
 * structure for create room data
 * @field name: room name
 * @field memberLimit: room member limit
 * @field privacy: room privacy
 * @field category: room category
 */
interface CreateRoomData {
    name: string;
    memberLimit: number;
    privacy: "public" | "private";
    category: string;
}

export const CreateRoom = async (data: CreateRoomData) => {
    const response = await axios({
        method: "POST",
        url: API.rooms,
        data,
    });
    return response.data;
}

export const AllUserRooms = async () => {
    const response = await axios({
        method: "GET",
        url: API.rooms,
    });
    return response.data;
}
