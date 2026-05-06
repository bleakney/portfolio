import { Flex, Text } from "@mantine/core";
import { BombIcon, FlowerIcon, ImageIcon } from "@phosphor-icons/react";
import { format } from "date-fns";
import { useEffect, useState, type FC, type MouseEventHandler } from "react";
import { useStore } from "../../store/root";
import { PageWindow } from "../../types/PageWindow";
import { WindowRouter } from "../WindowRouter/WindowRouter";
import classes from "./BaseLayout.module.css";
import { AppButton } from "../AppButton/AppButton";

export const BaseLayout: FC = () => {
    const { updateActiveWindow } = useStore();

    const openAboutWindow = () => {
        updateActiveWindow(PageWindow.About, true);
    }

    const openBffWindow = () => {
        updateActiveWindow(PageWindow.Bff, true);
    }

    const openMinesweeperWindow = () => {
        updateActiveWindow(PageWindow.Minesweeper, true);
    }


    return (
        <>
            <TopMenu items={[
                { label: <FlowerIcon size={16} />, title: TopMenuTitle.Home, subItems: [
                    { label: "About This Site", onClick: openAboutWindow },
                ] },
                { label: "File", title: TopMenuTitle.File, subItems: [
                    { label: "New", onClick: () => console.log("New clicked") },
                    { label: "Open", onClick: () => console.log("Open clicked") },
                    { label: "Save", onClick: () => console.log("Save clicked") },
                ] },
                { label: "Edit", title: TopMenuTitle.Edit, subItems: [
                    { label: "Undo", onClick: () => console.log("Undo clicked") },
                    { label: "Redo", onClick: () => console.log("Redo clicked") },
                    { label: "Cut", onClick: () => console.log("Cut clicked") },
                    { label: "Copy", onClick: () => console.log("Copy clicked") },
                    { label: "Paste", onClick: () => console.log("Paste clicked") },
                ] },
                { label: "View", title: TopMenuTitle.View, subItems: [
                    { label: "Zoom In", onClick: () => console.log("Zoom In clicked") },
                    { label: "Zoom Out", onClick: () => console.log("Zoom Out clicked") },
                    { label: "Reset Zoom", onClick: () => console.log("Reset Zoom clicked") },
                ] },
                { label: "Help", title: TopMenuTitle.Help, subItems: [
                    { label: "Documentation", onClick: () => console.log("Documentation clicked") },
                    { label: "Support", onClick: () => console.log("Support clicked") },
                ] },
            ]} />
            {/* <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem", alignItems: "flex-start", marginTop: "3rem" }}> */}
            <Flex>
                <Flex justify="flex-start" direction="column" gap="1rem" align="center" style={{ marginTop: "1rem", padding: "1rem" }}>
                    <AppButton title="BFF.gif" icon={<ImageIcon size={48} />} onClick={openBffWindow} />
                    <AppButton title="Minesweeper" icon={<BombIcon size={48} />} onClick={openMinesweeperWindow} />
                    <WindowRouter />
                </Flex>
            </Flex>
            {/* </div> */}
        </>
    )
}

interface TopMenuItem {
    label: string | React.ReactNode,
    title: TopMenuTitle,
    subItems: TopMenuSubItem[],
    isActive?: boolean,
}
interface TopMenuSubItem {
    label: string,
    onClick: VoidFunction,
}

enum TopMenuTitle {
    Home = 'home',
    File = 'file',
    Edit = 'edit',
    View = 'view',
    Help = 'help',
}

const TopMenu: React.FC<{ items: TopMenuItem[] }> = ({ items }) => {
    const [activeItem, setActiveItem] = useState<TopMenuTitle | null>(null);
    const [time, setTime] = useState(format(new Date(), 'EEE MMM d, h:mm aa'));

    const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (event) => {
        const target = event.target as HTMLElement;
        console.log('target', target.classList);
        const title = target?.className?.split("topMenu-")[1] as TopMenuTitle || null;
        if (title === activeItem) {
            return;
        }
        // const index = Array.from(target.parentElement!.children).indexOf(target);
        setActiveItem(title);
    }
    useEffect(() => {
        const handleClickOutside = (_event: MouseEvent) => {
            setActiveItem(null);
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, [setActiveItem]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(format(new Date(), 'EEE MMM d, h:mm aa'));
        }, 1000);

        return () => clearInterval(interval);

    }, [setTime]);

    return (
        <Flex justify="space-between" style={{ backgroundColor: "#ff9be8", color: "#78446b"}}>
            <Flex justify="flex-start">
                {items.map((item, index) => (
                    <TopMenuItem key={index} label={item.label} title={item.title} subItems={item.subItems} isActive={activeItem === item.title} onMouseEnter={handleMouseEnter} />
                ))}
            </Flex>
            <Flex justify="flex-end" style={{ padding: "0.25rem 0.5rem" }}>
                <Text size="sm">{time}</Text>
            </Flex>
        </Flex>
    )
}

const TopMenuItem: React.FC<{ label: string | React.ReactNode, title: TopMenuTitle, subItems: TopMenuSubItem[], isActive: boolean, onMouseEnter: MouseEventHandler<HTMLDivElement> }> = ({ label, title, subItems, isActive, onMouseEnter}) => {
    return (
        <div className={`topMenu-${title}`} onMouseEnter={onMouseEnter} style={{ padding: ".25rem .5rem", position: "relative", cursor: "default", backgroundColor: isActive ? "rgba(255, 255, 255, 0.3)" : "transparent"}}>
            <Text size="sm">{label}</Text>
            {isActive && 
            (
                <div style={{ display: "flex", flexDirection: "column", position: "absolute", paddingTop: "0.5rem", left: 0, minWidth: "8rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", zIndex: 10000 }}>
                    {subItems.map((subItem, index) => (
                        <Text className={classes.topMenuSubItem} style={{ padding: "0.25rem 0.5rem", }} key={index} size="xs" onClick={subItem.onClick}>
                            {subItem.label}
                        </Text>
                    ))}
                </div>
            )}
        </div>
    )
}

/* apps:
photo booth
movie date
bff.gif
minesweeper
little game
paint
*/