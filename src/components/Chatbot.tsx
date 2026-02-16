import React, { useEffect } from "react";

const Chatbot: React.FC = () => {
  useEffect(() => {
    // Initializing the chatbase script
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };

      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args: any[]) => target(prop, ...args);
        },
      });
    }

    const onLoad = () => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "aaezo2NReq9PA5l5dSU-O";
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
  }, []);

  return null;
};

export default Chatbot;

declare global {
  interface Window {
    chatbase: any;
  }
}
