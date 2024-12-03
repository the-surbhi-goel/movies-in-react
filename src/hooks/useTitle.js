import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Movies: ${title}`;
  });

  return null;
};
