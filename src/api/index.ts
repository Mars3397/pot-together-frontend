const backendBaseUrl = 'https://pottogether.store';

const API = {
    signup: `${backendBaseUrl}/users/signup`,
    login: `${backendBaseUrl}/user/login`,
    rooms: `${backendBaseUrl}/rooms`,
    searchRooms: `${backendBaseUrl}/rooms/search`,
    publicRooms: `${backendBaseUrl}/rooms/public`,
    records: `${backendBaseUrl}/records`,
    pots: `${backendBaseUrl}/pots`,
    ingredients: `${backendBaseUrl}/ingredients`,
};

export default API;
