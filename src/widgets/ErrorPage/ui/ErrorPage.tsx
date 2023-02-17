import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

// интерфейс на каждый компонент - название+Props
// интерфейс описывает пропсы на вход ErrorPage
interface ErrorPageProps {
    className?: string;
}

// mods , additional - по умолчанию уже проинициализированны
// принимает из вне какой-то доп. класс
// примет - src-widgets-ErrorPage-ui-ErrorPage-module__navbar
export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload(); // у объекта location функция по перезагрузке страницы
        // location.reload(); // у объекта location функция по перезагрузке страницы
    };
    // cls.ErrorPage -> webpack генерирует с помощью scss модулей
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
