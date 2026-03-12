import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Vo vývoji potlačiť známe hlásenia z Reactu a rozšírení (na production build sa nezobrazujú)
if (import.meta.env.DEV) {
  const noop = () => {};
  const origLog = console.log;
  const origWarn = console.warn;
  const origError = console.error;
  const skip = (args: unknown[], method: typeof origLog) => {
    const msg = String(args[0] ?? "");
    if (
      /React DevTools|Download the React DevTools/i.test(msg) ||
      /WebSocket connection to 'ws:\/\//.test(msg) ||
      /listener indicated an asynchronous response/i.test(msg) ||
      /Permissions policy violation|unload is not allowed/i.test(msg)
    )
      return;
    method.apply(console, args);
  };
  console.log = (...args) => skip(args, origLog);
  console.warn = (...args) => skip(args, origWarn);
  console.error = (...args) => skip(args, origError);
}

createRoot(document.getElementById("root")!).render(<App />);
