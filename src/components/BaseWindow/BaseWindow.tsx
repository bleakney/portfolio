import { useDraggable } from "@dnd-kit/react";
import { Text } from "@mantine/core";
import { useStore } from "../../store/root";
import type { PageWindow } from "../../types/PageWindow";
import classes from "./BaseWindow.module.css";

export interface BaseWindowProps {
    windowId: PageWindow;
    title: string;
    children: React.ReactNode;
}
export const MockWindow: React.FC<BaseWindowProps> = ({ windowId: windowId, title, children }) => {
    const { updateActiveWindow } = useStore();
    const closeWindow = () => {
        console.log(windowId, "window closed");
        updateActiveWindow(windowId, false)
    };
    // POST-MVP: implement minimize and maximize functionality
    // const minimizeWindow = () => console.log("Minimize window");
    // const maximizeWindow = () => console.log("Maximize window");
    
    const { ref } = useDraggable({
        id: windowId,
    })

    return (

            <div ref={ref} className={classes.window}>
                <div className={classes.titleBar}>
                    <div className={classes.windowButtonsContainer}>
                        <button onClick={closeWindow} className={`${classes.windowButton} ${classes.closeButton}`}></button>
                        {/* <button onClick={minimizeWindow} className={`${classes.windowButton} ${classes.minimizeButton}`}></button>
                        <button onClick={maximizeWindow} className={`${classes.windowButton} ${classes.maximizeButton}`}></button> */}
                    </div>
                    <Text size="sm">{title}</Text>
                </div>
                <div>{children}</div>
            </div>
    )
}