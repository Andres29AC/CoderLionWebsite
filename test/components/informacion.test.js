/** @jest-environment jsdom */
import { render} from '@testing-library/react';
import Informacion from '@/components/informacion';
test('load and display information', async () => {
    const {getByText,getByTitle}=render(<Informacion />);
    getByText("Andre Amaro Castillo");
    getByText("Desarrollador de software.Aqui encontraras algunos proyectos");
    const link = getByTitle("github").closest("a");
    expect(link.href).toEqual("https://github.com/Andres29AC");
    expect(link.target).toEqual("_blank");
    getByTitle("email");
});
