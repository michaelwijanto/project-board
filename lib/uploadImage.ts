import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;
  try {
    const fileUploaded = await storage.createFile(
      "6655a1bf002857038d8d",
      ID.unique(),
      file
    );
    return fileUploaded;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export default uploadImage;
