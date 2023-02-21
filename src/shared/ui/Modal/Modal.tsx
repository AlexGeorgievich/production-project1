import { classNames } from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

// интерфейс на каждый компонент - название+Props
// интерфейс описывает пропсы на вход Modal
interface ModalProps  {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;       // открыто или нет
    onClose?: () => void;   //  закрываем
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const  {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    // можем получить тип, который возвращает функция
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const {theme} = useTheme();

    const closeHandler = useCallback(() => {
        if(onClose){
            setIsClosing(true);
            timerRef.current = setTimeout( () => {
                onClose();
                setIsClosing(false)
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

// для предотвращения всплытия на контент часть навесим слушатель
// - принимает ивент, есть тип React.MouseEvent
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key ==='Escape') {
            closeHandler();
        }
    },[onClose]);

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown',onKeyDown);
        }
    },[isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]: true,
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods,[className])}>
                <div className={cls.overlay} onClick={closeHandler} >
                    <div
                        className={ cls.content }
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};

