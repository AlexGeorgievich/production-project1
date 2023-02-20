import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
// интерфейс описывает пропсы на вход Navbar
interface NavbarProps {
    className?: string;
}

// примет - src-widgets-Navbar-ui-Navbar-module__navbar
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {/* <ThemeSwitcher /> */}
            <div className={cls.links} />
        </div>
    );
};
