/* eslint-disable no-undef*/
import {render,screen } from "@testing-library/react"
import App from "../App"
import '@testing-library/jest-dom'
import Category from "../components/Home/Category";
import { BrowserRouter } from "react-router-dom";
import Test from "../pages/Test";

const Categoria = {
  id: '9c12dbf4-3c86-4e7b-8d76-3ec5f5a7e6b7',
    clase: 'A',
    categoria: 'I',
    duracion: 40,
    totalPreguntas: 40,
    minAprobar: 35,
}

describe('Testing de las pagina',()=>{
  test('Renderizado correcto de la pagina', () => {
    const r= render(<App/>);
    expect(r).toBeTruthy();
  });

  test('Listado de examenes',()=>{
    render(<App/>)
    const textCat= 'Categoria I';
    const textCat2= 'Categoria II-C';
    const result1 = screen.getByText(textCat);
    expect(result1).toBeInTheDocument()
    const result2 = screen.getByText(textCat2);
    expect(result2).toBeInTheDocument()
  });
})

describe('Renderizado del componente Categoria', ()=>{
  test('componente categoria',()=>{
    const r = render(
    <BrowserRouter>
    <Category item = {Categoria}/>
    </BrowserRouter>)
    expect(r).toBeDefined()
  });
})


describe('Vista previa del examen', () => {
  jest.mock('../hooks/useTests', () => ({
    useTests: jest.fn(() => ({
      test: {
      id: '9c12dbf4-3c86-4e7b-8d76-3ec5f5a7e6b7',
      clase: 'A',
      categoria: 'I',
      duracion: 40,
      totalPreguntas: 40,
      minAprobar: 35},
      getTestById: jest.fn()
    })),
  }));
 test.skip('renders correctly', () => {
  const { getByText } = render(<BrowserRouter><Test /></BrowserRouter>);
  expect(getByText('Simulacro')).toBeInTheDocument();
  expect(getByText('Licencia Clase Categoria')).toBeInTheDocument();
  })
});