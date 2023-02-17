import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

// интерфейс на каждый компонент - название+Props
// интерфейс описывает пропсы на вход Loader
interface LoaderProps {
    className?: string;
}

// принимает из вне какой-то доп. класс
// примет - src-widgets-Loader-ui-Loader-module__navbar
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
