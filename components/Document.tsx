import { useDocumentData } from "react-firebase-hooks/firestore";
import DocumentTitleComponent from "./DocumentTitleComponent";
import { doc } from "firebase/firestore";
import { db } from "@/firebase";

const Document = ({ id }: { id: string }) => {
  const [data, isLoading, error] = useDocumentData(doc(db, "documents", id));

  return (
    <div>
      <div className="flex max-w-6xl justify-between mx-auto pb-5">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading document: {error.message}</p>
        ) : (
          <DocumentTitleComponent docId={id} title={data?.title || ""} />
        )}
      </div>

      <div>
        {/* Manage users */}
        {/* Avatars */}
      </div>

      {/* Colloborative Editor */}
    </div>
  );
};
export default Document;
