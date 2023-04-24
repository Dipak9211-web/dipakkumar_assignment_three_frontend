import axios from "axios";

//const imgApi = https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy

export const fetchAllUser = async ()=>{
     const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
     return data;
}

export const createUser = async (user)=>{
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}`, user);
    return data;
};

export const updateUser = async (user) =>{
    const {data} = await axios.put(`${process.env.REACT_APP_BASE_URL}/${user.id}`, user)
    return data;
};

export const deleteUser = async (userId) =>{
    const {data} = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${userId}`)
    return data;
};

//api call for img
export const fetchImg = async (userName)=>{
    const response = await axios.get(`https://avatars.dicebear.com/v2/avataaars/${userName}.svg?options[mood][]=happy`);
    return response;
}