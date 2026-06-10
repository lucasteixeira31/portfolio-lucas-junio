import React from "react";
import { createRoot } from "react-dom/client";
import BrainContourHologram from "../components/BrainContourHologram.jsx";
import "./preview.css";
import brainModelUrl from "../../assets/images/brain_point_cloud.glb?url";

const modoEmbed = new URLSearchParams(window.location.search).get("embed") === "1";

document.body.classList.toggle("preview-embed", modoEmbed);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className={modoEmbed ? "preview-cerebro preview-cerebro-embed" : "preview-cerebro"}>
      <div className="preview-modelo">
        <BrainContourHologram modelPath={brainModelUrl} scale={modoEmbed ? 1.38 : 1.02} />
      </div>
    </main>
  </React.StrictMode>
);
