import useFiles from "../actions/useFiles";
import { useState } from "react";
import axios from "axios";
const TableFile = ({ files }) => {
  const { uploadFile } = useFiles();
  const [cancel, setCancel] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const source = axios.CancelToken.source();
    setCancel(source);
    files.map(async (file) => {        
        await uploadFile(file, source.token);
        });
  };
  const handleCancel = () => {
      cancel.cancel("Upload canceled");
  };

  return (
    <div>
        <button onClick={handleSubmit}>
            ENVIAR
        </button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {files?.map((file, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{file.nameFile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableFile;
