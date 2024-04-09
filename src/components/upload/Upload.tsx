import React, { useEffect, useState } from "react";
import { showToast, ToastTypes } from "../toastComponent/toast";
import axiosRequest from "../../api/api";
import axios from "axios";

const UploadCSV: React.FC = () => {
  const [presignedUrl, setPresignedUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  useEffect(() => {
    async function fetchapi() {
      try {



        const config = {
          method: "get",
          url: "admin/upload",
        };
        const response: any = await axiosRequest(config);



        console.log("000000000000000000", response);

        setPresignedUrl(response.data.presignedUrl);
      } catch (error) {
        console.error("Error fetching presigned URL:", error);
      }
    }
    fetchapi();
  }, []);
  console.log(presignedUrl);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  const truncateFileName = (fileName: string, maxLength: number) => {
    if (fileName.length > maxLength) {
      return fileName.slice(0, maxLength) + "...";
    }
    return fileName;
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      showToast(ToastTypes.ERROR, "Please select a file to upload.");
      return;
    }
    setUploading(true);
    try {
      console.log(selectedFile);
      console.log(presignedUrl);

      let res1 = await axios.put(presignedUrl, selectedFile, {
        headers: {
          "Content-Type": "application/octet-stream",
        },
      })
      
      console.log("presignedUrl : ",res1);
      
      // alert("File uploaded successfully");

      showToast(ToastTypes.SUCCESS, "Data Upload to S3");

      try {
        const config = {
          method: "get",
          url: "admin/downloadfile",
        };
        let res2 = await axiosRequest(config);
        console.log(res2);
        showToast(ToastTypes.SUCCESS, "Data Download to Server ");
      } catch (error) {
        console.log(error);
        showToast(ToastTypes.ERROR, "Failed Data Upload to DB ");
        const config = {
          method: "get",
          url: "admin/deletefile",
        };
        let deleteFile = await axiosRequest(config)
        console.log(deleteFile);
        showToast(ToastTypes.INFO, "Data Delete From S3");
      }
    } catch (error) {
      console.error("Error uploading file:", error);

      alert("Error uploading file");
    }

    // const progressInterval = setInterval(() => {
    //   setUploadProgress((prevProgress) => {
    //     const newProgress = prevProgress + 10;

    //     if (newProgress >= 100) {
    //       clearInterval(progressInterval);

    //       setTimeout(() => {
    //         setUploading(false);
    //         setSelectedFile(null);
    //         setUploadProgress(0);
    //         // toast.success("Upload successful!");
    //         showToast(ToastTypes.SUCCESS, " Upload successful ! ");
    //       }, 500);

    //       return 100;
    //     }
    //     return newProgress;
    //   });
    // }, 500);
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Upload CSV File</h1>
      <div className="flex flex-col items-center space-y-4">
        <label htmlFor="file" className={`border border-blue-500 py-2 px-4 rounded-lg w-64 text-blue-500 ${selectedFile ? "border-green-500" : ""}`}>
          <input type="file" id="file" onChange={handleFileChange} accept=".csv, application/vnd.ms-excel" className="hidden" />
          {selectedFile ? truncateFileName(selectedFile.name, 20) : "Choose File"}
        </label>
        <button
          onClick={handleUpload}
          className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ${
            uploading || !selectedFile ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={uploading || !selectedFile}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      {uploadProgress > 0 && (
        <div className="mt-4 text-center">
          Uploading: {uploadProgress}%
          <div className="w-full bg-gray-200 mt-2 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-2" style={{ width: `${uploadProgress}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadCSV;
