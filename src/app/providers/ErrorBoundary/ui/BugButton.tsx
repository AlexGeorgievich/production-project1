import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// интерфейс на каждый компонент - название+Props
// интерфейс описывает пропсы на вход BugButton
interface BugButtonProps {
    className?: string;
}

// примет - src-widgets-BugButton-ui-BugButton-module__navbar

// компонент для тестирования
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error(); // проброс ошибки
        }
    }, [error]);

    // cls.BugButton -> webpack генерирует с помощью scss модулей
    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};
