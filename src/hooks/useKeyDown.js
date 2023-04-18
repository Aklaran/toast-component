import React from "react";

function useKeyDown(keyCode, callback) {
  console.log({ keyCode, callback });

  React.useEffect(() => {
    function handleKeyDown(event) {
      console.log("hkd");
      if (event.code === keyCode) {
        console.log("in keycode");
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
