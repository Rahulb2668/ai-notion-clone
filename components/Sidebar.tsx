import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Sidebar = () => {
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
