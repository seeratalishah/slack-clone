import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CopyIcon, RefreshCcw } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface InviteModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  joinCode: string;
}

const InviteModal = ({ open, setOpen, name, joinCode }: InviteModalProps) => {
  const handleCopy = () => {
    const inviteLink = `${window.location.origin}/join/workspace/1`;
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => toast.success("Invite link is copied to clipboard"));
  };

  const handleNewCode = () => {
    console.log("Api call to generate new code");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite people to {name}</DialogTitle>
          <DialogDescription>
            Use the code below to invite people to your workspace
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-4 items-center justify-center py-10">
          <p className="text-4xl font-bold tracking-widest uppercase">
            {joinCode}
          </p>
          <Button variant="ghost" size="sm" onClick={handleCopy}>
            Copy link <CopyIcon className="size-4 ml-2" />
          </Button>
        </div>
        <div className="flex item-center justify-between w-full">
          <Button onClick={() => handleNewCode()} variant="outline">
            New Code <RefreshCcw className="size-4 ml-2" />
          </Button>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;
