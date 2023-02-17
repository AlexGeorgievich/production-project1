import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

// интерфейс на каждый компонент - название+Props
// интерфейс описывает пропсы на вход Sidebar
interface SidebarProps {
    className?: string;
}

// принимает из вне какой-то доп. класс
// примет - src-widgets-Sidebar-ui-Sidebar-module__navbar
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    // cls.Sidebar -> webpack генерирует с помощью scss модулей
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            {/*<Button*/}
            {/*    data-testid="sidebar-toggle"*/}
            {/*    onClick={onToggle}*/}
            {/*>*/}
            {/*    toggle*/}
            {/*</Button>*/}
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
