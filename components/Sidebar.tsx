"use client";

import { useCollection } from "react-firebase-hooks/firestore";
import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUser } from "@clerk/nextjs";
import { collectionGroup, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect } from "react";
import { RoomDocument } from "@/types/types";

const Sidebar = () => {
  const { user } = useUser();
  const [data, loading, error] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user.emailAddresses[0].toString())
      )
  );

  useEffect(() => {
    if (!data) return;

    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, current) => {
        const roomData = current.data() as RoomDocument;
        if (roomData.role === "owner") {
          acc.owner.push({
            id: current.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: current.id,
            ...roomData,
          });
        }
        return acc;
      },
      { owner: [], editor: [] }
    );
  }, [data]);

  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* My Documents */}
      {/* List ... */}

      {/* Shared with me */}
      {/* List ... */}

      {/* Trash */}
      {/* List ... */}
    </>
  );

  return (
    <div className="p-2 md:p-5 relative bg-gray-200 ">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="p-2 hover:opactity-30 rounded-lg " size={40} />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
};
export default Sidebar;
