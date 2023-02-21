import { ReactNode } from "react";
import { createPortal } from "react-dom";


interface PortalProps  {
    children: ReactNode;
    element?: HTMLElement;  // что телепортируем
}
// куда
export const Portal = (props: PortalProps) => {

    const {
        children,
        element = document.body,
    } = props;

    return  createPortal(children, element);
};

