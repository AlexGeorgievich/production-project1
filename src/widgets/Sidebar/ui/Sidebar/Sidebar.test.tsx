//
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWitnTrnslation/renderWithTranslation';
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe('Sidebar', () => {
    test('Sidebar', () => {
        // const SidebarWithTranslation = withTranslation()(Sidebar);
        // render(<SidebarWithTranslation />);
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    // тест на разворачивание и сворачивание Sidebar
    test('test toggle', () => {
        componentRender(<Sidebar />); // render screen
        const toggleBtn = screen.getByTestId('sidebar-toggle'); // получили кнопку по идентификатору 'sidebar-toggle'
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn); // press on the Button
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed'); // проверка что sidebar - свернут
    });
});
