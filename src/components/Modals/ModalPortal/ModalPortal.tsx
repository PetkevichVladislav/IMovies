import { FC, ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface IModalPortal {
    wrapperId?: string;
    children: ReactNode;
}

function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

export const ModalPortal: FC<IModalPortal> = ({ children, wrapperId="portal-modal-container"}) => {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element!);

        return () => {
            if (systemCreated && element!.parentNode) {
                element!.parentNode.removeChild(element!);
            }
        }
    }, [wrapperId]);

    if (wrapperElement === null) {
        return null;
    }
    
    return createPortal(children, document.getElementById(wrapperId) as Element);
}
