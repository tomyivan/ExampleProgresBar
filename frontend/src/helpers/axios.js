
import axios  from "axios";
const uploadUrl = 'http://127.0.0.1:4200';
const axiosNoToken = async (endPoint,formData,config, setCancel) => {
    return await axios.post(`${uploadUrl}/${endPoint}`, formData, config);
}
export  {
    axiosNoToken
};