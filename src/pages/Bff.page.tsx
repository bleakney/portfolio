import type { FC } from "react";
import bffGif from "../assets/bff.gif";

export const BffPage: FC = () => {
    return (
        <div>
            <img src={bffGif} alt="BFF" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
    )
}