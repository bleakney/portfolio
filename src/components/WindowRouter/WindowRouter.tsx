import type { FC } from "react";
import { MinesweeperPage } from "../../pages/Minesweeper";
import { useStore } from "../../store/root";
import { PageWindow } from "../../types/PageWindow";
import { MockWindow, type BaseWindowProps } from "../BaseWindow/BaseWindow";
import { BffPage } from "../../pages/Bff.page";

export const WindowRouter: FC = () => {
    const { activeWindows } = useStore();
    const windows = {
        [PageWindow.About]: {
            windowId: PageWindow.About,
            title: "About This Site",
            children: <div>About content goes here</div>,
        },
        [PageWindow.Bff]: {
            windowId: PageWindow.Bff,
            title: "BFF.gif",
            children: <BffPage />,
        },
        [PageWindow.Minesweeper]: {
            windowId: PageWindow.Minesweeper,
            title: "MineSweeper",
            children: <MinesweeperPage />,
        }
    } as Record<PageWindow, BaseWindowProps>;
    
    return (
        <>
            {Object.entries(activeWindows).map(([key, isActive]) => (
                isActive === true && 
                    <MockWindow key={windows[key as PageWindow].windowId} windowId={windows[key as PageWindow].windowId} title={windows[key as PageWindow].title}>
                        {windows[key as PageWindow].children}
                    </MockWindow>
            ))}
        </>
    )
}