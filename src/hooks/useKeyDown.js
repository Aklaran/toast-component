import React from "react";

function useKeyDown(keyCode, callback) {
  console.log({ keyCode, callback });

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === keyCode) {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keyCode", handleKeyDown);
    };
  }, []);
}

export default useKeyDown;
