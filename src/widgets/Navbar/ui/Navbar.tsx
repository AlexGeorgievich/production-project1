import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

// интерфейс описывает пропсы на вход Navbar
interface NavbarProps {
    className?: string;
}

// примет - src-widgets-Navbar-ui-Navbar-module__navbar
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev)  =>!prev )
    },[]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={ onToggleModal} >
                {/* eslint-disable-next-line  */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet animi consequatur dignissimos dolor dolorum eius eum incidunt maxime, minima minus nesciunt, nulla odit officia perspiciatis quis, reiciendis voluptatibus.
            </Modal>
        </div>
    );
};
