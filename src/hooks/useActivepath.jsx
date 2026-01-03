import { useLocation } from "react-router-dom";

export default function useActivePath() {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return { isActive };
}
