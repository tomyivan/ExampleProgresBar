import { axiosNoToken } from "../helpers/axios";
const useFiles = () => {
    const uploadFile = async (files,cancelToken) => {
        const formData = new FormData();
        formData.append('file', files.file);
        const ol = document.querySelector('#status');
        const li = ol.appendChild(document.createElement('li'));
        li.innerHTML = `Subiendo ${files.nameFile}`;
        const progress = document.createElement('progress');
        progress.max = 100;
        progress.value = 0;
        li.appendChild(progress);
        const endPoint = 'upload';
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                const percent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                progress.value = percent;             
            },
            cancelToken: cancelToken
        };
        try {
            const response = await axiosNoToken(endPoint, formData, config);
            console.log('Upload successful:', response);
            li.innerHTML = `Subido ${files.nameFile}`;
        } catch (error) {
           console.error('Upload failed:', error);
              li.innerHTML = `Error al subir ${files.nameFile}`;
        }         
    }        
    return {
        uploadFile
    }
}
export default useFiles;