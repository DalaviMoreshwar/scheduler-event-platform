"use client";

import { Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTransition } from "react";
import { usePathname } from "next/navigation";

const DeleteConfirmation = ({ eventId }: { eventId: string }) => {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash2Icon />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to delete?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            event and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="button">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="button"
            onClick={() => {
              startTransition(async () => {
                // await deleteEvent({ eventId, path: pathname });
              });
            }}
          >
            {isPending ? "Deleteing..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmation;
