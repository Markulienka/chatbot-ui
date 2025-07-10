import { useRef, useEffect } from "react";

export function useAutoScroll(deps: any[] = []) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, deps);

  return bottomRef;
}