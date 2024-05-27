type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
  id: TypedColumn;
  todos: Todo[];
}

interface Board {
  columns: Map<TypedColumn, Column>;
}

interface Todo {
  title: string;
  status: TypedColumn;
  image?: Image;
  $id: string;
  $createdAt: string;
}

interface Image {
  bucketId: string;
  fileId: string;
}
