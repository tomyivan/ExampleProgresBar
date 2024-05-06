import FormUpload from '../components/FormUpload';
import TableFile from '../components/TableFile';
import { useState } from 'react';
const UploadFile = () =>{
    const [files, setFiles] = useState([]);
    return (
        <div>
            <FormUpload 
                files={files}
                setFiles={setFiles}
            />
            <div>
                <TableFile 
                    files={files}
                />
            </div>
        </div>
    );
}   
export default UploadFile;