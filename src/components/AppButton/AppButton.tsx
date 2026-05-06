import type { FC, ReactNode } from "react";
import { Text } from "@mantine/core";

interface AppButtonProps {
    title: string;
    icon: ReactNode
    onClick: VoidFunction;
}
export const AppButton: FC<AppButtonProps> = ({ title, icon, onClick }) => {
    return (
        <a onClick={onClick} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: "#78446b", flex: 1}}>
                {icon}
                <Text size="sm">{title}</Text>
        </a>
    )


}