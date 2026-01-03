import { useState } from "react";

export default function useNavbar() {
  const [open, setOpen] = useState(false);

  return {
    open,
    toggle: () => setOpen((prev) => !prev),
    close: () => setOpen(false),
  };
}
