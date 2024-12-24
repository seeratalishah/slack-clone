"use client"

import CreateChannelModal from "@/features/channels/components/create-channel-modal";
import React, { useEffect, useState } from "react";

const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <CreateChannelModal />
    </>
  );
};

export default Modals;
