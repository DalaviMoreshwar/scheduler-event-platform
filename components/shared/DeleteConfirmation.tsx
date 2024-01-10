import { Trash2Icon } from "lucide-react";
import React from "react";

const DeleteConfirmation = ({ eventId }: { eventId: string }) => {
  return (
    <div>
      <Trash2Icon />
    </div>
  );
};

export default DeleteConfirmation;
