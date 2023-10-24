// import React, { useState, useRef } from "react";
// import { Storage } from "@google-cloud/storage";
// import { FaImage, FaTimes } from "react-icons/fa";

// const storage = new Storage({
//     projectId: "yard-350620",
//     keyFilename: "/path/to/keyfile.json"
// });

// const uploadImageToGCS = async imageFile => {
//     const bucketName = "sero-project";
//     const bucket = storage.bucket(bucketName);
//     const fileName = `${Date.now()}_${imageFile.name}`;
//     const file = bucket.file(fileName);

//     await file.save(imageFile.data, {
//         metadata: {
//             contentType: imageFile.type
//         }
//     });

//     const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
//     return publicUrl;
// };

// export const ClientImage = () => {
//     const [formData, setFormData] = useState({ Image: null });
//     const fileInputRef = useRef(null);

//     async function handleImageChange(event) {
//         const file = event.target.files[0];
//         const imageUrl = await uploadImageToGCS(file);
//         setFormData({
//             ...formData,
//             Image: imageUrl
//         });
//     }

//     function handleButtonClick() {
//         fileInputRef.current.click();
//     }

//     function handleImageRemove() {
//         setFormData({
//             ...formData,
//             Image: null
//         });
//         fileInputRef.current.value = null;
//     }

//     return (
//         <div>
//             <div>
//                 <label htmlFor="Image" className="sr-only">
//                     Image
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaImage className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                         id="Image"
//                         name="Image"
//                         type="file"
//                         accept="image/*"
//                         required
//                         className="hidden"
//                         ref={fileInputRef}
//                         onChange={handleImageChange}
//                     />
//                     <button
//                         type="button"
//                         className=" text-start focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-2 mb-4 sm:text-sm border-gray-300 rounded-md text-white bg-green-700"
//                         onClick={handleButtonClick}>
//                         Select The Image
//                     </button>
//                 </div>
//             </div>
//             {formData.Image && (
//                 <div className="relative">
//                     <img src={formData.Image} alt="Uploaded image preview" />
//                     <button
//                         type="button"
//                         className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none"
//                         onClick={handleImageRemove}>
//                         <FaTimes className="h-5 w-5 text-red-500" />
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };
