import React, { useEffect } from "react";
import useAppStore from "host/StateService";

export const Video = () => {
  const setMicro = useAppStore((state) => state.setMicro);

  useEffect(() => {
    setMicro("video");
  }, []);

  return (
    <div style={{ border: "1px solid brown", margin: "2px" }}>
      <h1>Video Page App</h1>
    </div>
  );
};
