import React, { useState, useEffect } from "react";

const Warning = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(!show);
    }, 500);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <div className={"warning"}>
      <div className={"warning-container"}>
        <span className={"at1"}>{show ? <span>ATTENTION</span> : null}</span>
        <span className={"at2"}>
          {show ? <span>OBEY THE RULES</span> : null}
        </span>
      </div>
    </div>
  );
};

export default Warning;
