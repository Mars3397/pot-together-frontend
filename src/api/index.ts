const backendBaseUrl = 'https://pottogether.store';

const API = {
    signup: `${backendBaseUrl}/users/signup`,
    login: `${backendBaseUrl}/users/login`,
    overview: `${backendBaseUrl}/users/overview`,
    rooms: `${backendBaseUrl}/rooms`,
    searchRooms: `${backendBaseUrl}/rooms/search`,
    publicRooms: `${backendBaseUrl}/rooms/public`,
    records: `${backendBaseUrl}/records`,
    pots: `${backendBaseUrl}/pots`,
    ingredients: `${backendBaseUrl}/ingredients`,
};

export default API;

/**
 * structure for API response
 * @field isSuccess: whether the request is successful
 * @field data: the data returned from the request (defined through generics <T>)
 * @field message: the message returned from the request
 */
export interface APIResponse<T> {
    isSuccess: boolean;
    data: T;
    message: string | null;
}

/**
 * struture for level info
 * @field level: level number
 * @field totalTime: total cooking time for the user
 * @field next: the awarded ingredient image link next level
 */
export interface LevelInfo {
    level: number; 
    totalTime: number;
    next: string;
}

/**
 * structure for record with image (use in ingredients list)
 * @field recordID: record id
 * @field image: ingredient image link
 */
export interface RecordWithImage {
    recordID: number;
    image: string;
}

/**
 * structure for daily accumulated cooking time
 * @field date: date string in format "YYYY/MM/DD"
 * @field length: accumulated cooking time in seconds
 */
export interface DailyLength {
    date: string;
    length: number;
}

/**
 * structure for simple room info
 * @field roomID: room id
 * @field name: room name
 * @field memberCount: number of members in the room
 * @field memberLimit: room member limit
 */
export interface SimpleRoomInfo {
    roomID: number;
    name: string;
    memberCount: number;
    memberLimit: number;
}

/**
 * structure for get ingredienta data
 * 
 * @field recordID: record id
 * @field image: ingredient image link
 * @field caption: ingredient caption
 * @field interval: cooking time interval
 * @field finishTime: cooking finish time
 * @field ingredientID: ingredient id
 * @field ingredientImage: ingredient image link
 * @field ingredientName: ingredient name
 * @field interrupt: how many times the cooking is interrupted
 * @field status: cooking status
 */

export const statusMapping = ['正在煮', '煮好了', '失敗']
export interface Ingredient {
    recordID: number
    image: string
    caption: string
    interval: number
    finishTime: number
    ingredientID: number
    ingredientImage: string
    ingredientName: string
    interrupt: number
    status: number
}
