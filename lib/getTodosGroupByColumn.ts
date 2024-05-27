import { databases } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.PUBLIC_DATABASE_ID!,
    process.env.PUBLIC_TODOS_COLLECTION_ID!
  );
  const todos = data.documents;
};
