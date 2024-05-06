import useFiles from "../actions/useFiles";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
const FormUpload = ({files,setFiles}) => {

  const onDrop = (acceptedFiles) => {
    const dataFiles = acceptedFiles.map((file) => ({
      nameFile:file.name.split(".")[0],
      file: file 
    }));
    setFiles([...files, ...dataFiles]);
  };
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
         <div {...getRootProps()} className='dragDrop' >
        <input {...getInputProps()}  accept="image/*,video/*"/>
        {isDragActive ? (
          <p className='fw-bold'>Suelta los archivos aquí ...</p>
        ) : (
          <p className='fw-bold'>
            Arrastra y suelta algunos archivos aquí, o haz clic para seleccionar
            archivos
          </p>
        )}
      </div>
    </>
  );
};
export default FormUpload;
