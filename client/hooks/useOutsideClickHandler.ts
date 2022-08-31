import { RefObject, useEffect } from "react";
import { useState } from "react";

const useOutsideClickHandler = (ref: RefObject<HTMLDivElement>) => {
  const [isPopup, setIsPopup] = useState(false);
  useEffect(() => {
    function handleClickOutside() {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        setIsPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return { isPopup, setIsPopup };
};

export default useOutsideClickHandler;
