// // // import React, { useState, ChangeEvent } from "react";
// // // import io from "socket.io-client";

// // // const socket = io("http://localhost:8000");

// // // const Upload: React.FC = () => {
// // //   const [progress, setProgress] = useState<number>(0);
// // //   const [fileName, setFileName] = useState<string>("");

// // //   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
// // //     const file = event.target.files?.[0];
// // //     if (file) {
// // //       setFileName(file.name);
// // //     }
// // //   };

// // //   const handleUploadButtonClick = () => {
// // //     const fileInput = document.getElementById("file") as HTMLInputElement;
// // //     if (fileInput && fileInput.files) {
// // //       const file = fileInput.files[0];
// // //       if (file) {
// // //         const fileSize = file.size;
// // //         console.log(fileSize);

// // //         const reader = new FileReader();

// // //         reader.onload = () => {
// // //           const fileData = reader.result;
// // //           socket.emit("upload", {
// // //             fileName: file.name,
// // //             data: fileData,
// // //             size: fileSize,
// // //             progress: 0, // Initial progress
// // //           });

// // //           // Listen for progress updates
// // //           socket.on("progress", (progress: number) => {
// // //             setProgress(progress); // Update progress state
// // //           });
// // //         };

// // //         reader.readAsArrayBuffer(file);
// // //       }
// // //     }
// // //   };

// // //   // const handleUploadButtonClick = () => {
// // //   //   const fileInput = document.getElementById("file") as HTMLInputElement;
// // //   //   if (fileInput && fileInput.files) {
// // //   //     const file = fileInput.files[0];
// // //   //     if (file) {
// // //   //       const fileSize = file.size;
// // //   //       console.log(fileSize);

// // //   //       const reader = new FileReader();

// // //   //       reader.onload = () => {
// // //   //         const fileData = reader.result;
// // //   //         socket.emit("upload", {
// // //   //           fileName: file.name,
// // //   //           data: fileData,
// // //   //           size: fileSize,
// // //   //           progress: 100,
// // //   //           // Assuming progress is 100% since the entire file is being sent at once
// // //   //         });
// // //   //       };

// // //   //       reader.readAsArrayBuffer(file);
// // //   //     }
// // //   //   }
// // //   // };

// // //   return (
// // //     <div className="p-6 bg-gray-100 rounded-lg shadow-md">
// // //       <h1 className="text-3xl font-bold text-gray-800 mb-4">File upload</h1>
// // //       <div className="flex items-center justify-between">
// // //         <input
// // //           type="file"
// // //           id="file"
// // //           // accept=".gz"
// // //           className="hidden"
// // //           onChange={handleFileChange}
// // //         />
// // //         <label
// // //           htmlFor="file"
// // //           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
// // //         >
// // //           Select File
// // //         </label>
// // //         <button
// // //           onClick={handleUploadButtonClick}
// // //           className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded cursor-pointer ml-4"
// // //         >
// // //           Upload
// // //         </button>
// // //         {fileName && <p className="ml-4">{fileName}</p>}
// // //         {progress > 0 && (
// // //           <div className="ml-4 w-1/2">
// // //             <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
// // //               <div
// // //                 className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
// // //                 style={{ width: `${progress}%` }}
// // //               >
// // //                 {progress.toFixed(2)}%
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Upload;

// // import React, { useState, ChangeEvent } from "react";
// // import io from "socket.io-client";

// // const socket = io("http://localhost:8000");
// // console.log(socket);
// // const CHUNK_SIZE = 1024 * 1024; // 1 MB
// // const Upload: React.FC = () => {
// //   const [progress, setProgress] = useState<number>(0);
// //   const [fileName, setFileName] = useState<string>("");

// //   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
// //     const file = event.target.files?.[0];
// //     if (file) {
// //       setFileName(file.name);
// //     }
// //   };
// //   // const handleUploadButtonClick = () => {
// //   //   const fileInput = document.getElementById("file") as HTMLInputElement;
// //   //   console.log("fileInput :", fileInput);

// //   //   if (fileInput && fileInput.files) {
// //   //     const file = fileInput.files[0];
// //   //     console.log("The file is :", file);

// //   //     if (file) {
// //   //       const fileSize = file.size;
// //   //       console.log("file size :", fileSize);
// //   //       let offset = 0;
// //   //       const reader = new FileReader();
// //   //       reader.onload = () => {
// //   //         const fileData = reader.result as ArrayBuffer;
// //   //         let count =1

// //   //         while (offset < fileSize) {
// //   //           count++
// //   //           console.log("count :",count,offset);

// //   //           const chunk = fileData.slice(offset, offset + CHUNK_SIZE)

// //   //           socket.emit("uploadChunk", {
// //   //             fileName: file.name,
// //   //             data: chunk,
// //   //             size: fileSize,
// //   //             offset,
// //   //             progress: (offset / fileSize) * 100,
// //   //           });

// //   //           offset += CHUNK_SIZE;
// //   //         }
// //   //         // Reset progress after upload
// //   //         setProgress(0);
// //   //       };

// //   //       reader.readAsArrayBuffer(file);
// //   //     }
// //   //   }
// //   // };

// //   const handleUploadButtonClick = async () => {
// //     const fileInput = document.getElementById("file") as HTMLInputElement;

// //     if (fileInput && fileInput.files) {
// //       const file = fileInput.files[0];

// //       if (file) {
// //         const fileSize = file.size;
// //         let offset = 0;
// //         const reader = new FileReader();

// //         reader.onload = async () => {
// //           const fileData = reader.result as ArrayBuffer;
// //           let count = 1;

// //           while (offset < fileSize) {
// //             count++;
// //             console.log("count:", count, "offset:", offset);

// //             const chunk = fileData.slice(offset, offset + CHUNK_SIZE);

// //             // Wrap the socket.emit in a Promise to await the response

// //             await new Promise<void>((resolve) => {
// //               socket.emit("uploadChunk", {
// //                 fileName: file.name,
// //                 data: chunk,
// //                 size: fileSize,
// //                 offset,
// //                 progress: (offset / fileSize) * 100,
// //               }, () => {

// //                 // Resolve the Promise after the response is received
// //                 resolve();

// //               });
// //             });

// //             offset += CHUNK_SIZE;
// //           }

// //           // Reset progress after upload
// //           setProgress(0);
// //         };

// //         reader.readAsArrayBuffer(file);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="p-6 bg-gray-100 rounded-lg shadow-md">
// //       <h1 className="text-3xl font-bold text-gray-800 mb-4">File upload</h1>
// //       <div className="flex items-center justify-between">
// //         <input
// //           type="file"
// //           id="file"
// //           className="hidden"
// //           onChange={handleFileChange}
// //         />
// //         <label
// //           htmlFor="file"
// //           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
// //         >
// //           Select File
// //         </label>
// //         <button
// //           onClick={handleUploadButtonClick}
// //           className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded cursor-pointer ml-4"
// //         >
// //           Upload
// //         </button>
// //         {fileName && <p className="ml-4">{fileName}</p>}
// //         {progress > 0 && (
// //           <div className="ml-4 w-1/2">
// //             <div className="w-full bg-gray-200 rounded-full">
// //               <div
// //                 className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
// //                 style={{ width: `${progress}%` }}
// //               >
// //                 {progress.toFixed(2)}%
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Upload;

// import React, { useState, useEffect, ChangeEvent } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import io from "socket.io-client";

// const socket = io("http://localhost:3000");

// function App(): JSX.Element {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [uploadProgress, setUploadProgress] = useState<number>(0);

//   useEffect(() => {
//     socket.on("uploadComplete", ({ fileName }: { fileName: string }) => {
//       console.log("Upload Complete:", fileName);
//       toast.success("File uploaded successfully");
//       setUploadProgress(0);
//     });

//     return () => {
//       socket.off("uploadComplete");
//     };
//   }, []);

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     if (event.target.files && event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   const handleUpload = async (): Promise<void> => {
//     if (!selectedFile) {
//       console.log("No file selected");
//       return;
//     }

//     const chunkSize = 1024 * 1024;
//     const chunks = Math.ceil(selectedFile.size / chunkSize);
//     const formData = new FormData();

//     for (let index = 0; index < chunks; index++) {
//       const start = index * chunkSize;
//       const end = Math.min(start + chunkSize, selectedFile.size);
//       const chunk = selectedFile.slice(start, end);

//       formData.append("fileChunk", chunk, `${selectedFile.name}.part${index}`);
//     }

//     try {
//       const totalSize = selectedFile.size;
//       // Total file size for calculating progress
//       let uploadedBytes = 0;
//       // Initially, no bytes are uploaded

//       // Initiate the fetch request
//       const response = await fetch("http://localhost:3000/upload", {
//         method: "POST",
//         body: formData,
//       });

//       // Track progress using the progress event
//       const reader = response.body?.getReader();
//       // Get a reader for the response body
//       if (reader) {
//         while (true) {
//           const { done, value } = await reader.read();
//           // Read the response body
//           if (done) break;
//           // Exit the loop if done

//           uploadedBytes += value.length;
//           // Increment the uploaded bytes
//           const progress = Math.round((uploadedBytes / totalSize) * 100);
//           // Calculate progress
//           setUploadProgress(progress);
//           // Update upload progress state
//         }
//       }

//       console.log("File uploaded successfully", response);
//     } catch (error) {
//       console.error("Error uploading file", error);
//       toast.error("Error uploading file");
//     }
//   };

//   return (
//     <div className="container mx-auto mt-10 px-4">
//       <h1 className="text-3xl font-bold  mb-4 text-center">
//         Select File !
//       </h1>
//       <div className="flex flex-col items-center space-y-4">
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="border border-gray-300 py-2 px-4 rounded-lg w-64"
//         />
//         <button
//           onClick={handleUpload}
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//         >
//           Upload
//         </button>
//       </div>
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       {uploadProgress > 0 && (
//         <div className="mt-4 text-center">
//           Uploading: {uploadProgress}%
//           <div className="w-full bg-gray-200 mt-2">
//             <div
//               className="bg-blue-500 h-2"
//               style={{ width: `${uploadProgress}%` }}
//             ></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function App(): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false); // State to track uploading status

  useEffect(() => {
    socket.on("uploadComplete", ({ fileName }: { fileName: string }) => {
      console.log("Upload Complete:", fileName);
      toast.success("File uploaded successfully");
      setUploadProgress(0);
      setUploading(false); // Enable upload button after upload completion
    });

    return () => {
      socket.off("uploadComplete");
    };
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async (): Promise<void> => {
    if (!selectedFile) {
      console.log("No file selected");
      return;
    }

    setUploading(true); // Disable upload button when uploading starts

    const chunkSize = 1024 * 1024;
    const chunks = Math.ceil(selectedFile.size / chunkSize);
    const formData = new FormData();

    for (let index = 0; index < chunks; index++) {
      const start = index * chunkSize;
      const end = Math.min(start + chunkSize, selectedFile.size);
      const chunk = selectedFile.slice(start, end);

      formData.append("fileChunk", chunk, `${selectedFile.name}.part${index}`);
    }

    try {
      const totalSize = selectedFile.size;
      let uploadedBytes = 0;

      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      const reader = response.body?.getReader();
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          uploadedBytes += value.length;
          const progress = Math.round((uploadedBytes / totalSize) * 100);
          setUploadProgress(progress);
        }
      }

      console.log("File uploaded successfully", response);
    } catch (error) {
      console.error("Error uploading file", error);
      toast.error("Error uploading file");
    } finally {
      setUploading(false); // Enable upload button after upload completes or encounters an error
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold  mb-4 text-center">Select File !</h1>
      <div className="flex flex-col items-center space-y-4">
        <label
          htmlFor="file"
          className={`border border-gray-300 py-2 px-4 rounded-lg w-64 ${
            selectedFile ? "border-green-500" : ""
          }`} // Add green border when a file is selected
        >
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="hidden"
          />
          Select File
        </label>
        <button
          onClick={handleUpload}
          className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ${
            uploading || !selectedFile ? "opacity-50 cursor-not-allowed" : ""
          }`} // Disable button when uploading or no file selected
          disabled={uploading || !selectedFile} // Disable button when uploading or no file selected
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {uploadProgress > 0 && (
        <div className="mt-4 text-center">
          Uploading: {uploadProgress}%
          <div className="w-full bg-gray-200 mt-2">
            <div
              className="bg-blue-500 h-2"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
