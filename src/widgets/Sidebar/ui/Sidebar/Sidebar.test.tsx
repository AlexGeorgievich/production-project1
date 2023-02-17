//
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWitnTrnslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Sidebar', () => {
        // const SidebarWithTranslation = withTranslation()(Sidebar);
        // render(<SidebarWithTranslation />);
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    // тест на разворачивание и сворачивание Sidebar
    test('test toggle', () => {
        renderWithTranslation(<Sidebar />); // render screen
        const toggleBtn = screen.getByTestId('sidebar-toggle'); // получили кнопку по идентификатору 'sidebar-toggle'
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn); // press on the Button
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed'); // проверка что sidebar - свернут
    });
});
