import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

// Route получаем из routeConfig
// необходим массив значений - воспользуемся функцией Object.values
// нужные значения передаем как пропсы в компонент Route
//                    <Route path={'/about'} element={<AboutPage />} />
//                    <Route path={'/'} element={<MainPage />} />
// делаем деструктуризацию и из каждого значения Объекта вытаскиваем key, path, element
const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
