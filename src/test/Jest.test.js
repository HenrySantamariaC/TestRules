/* eslint-disable no-undef*/
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Category from "../components/Home/Category"
import { BrowserRouter } from "react-router-dom"
import Test from "../pages/Test"
import ListCategory from "../components/Home/ListCategory"

const Categoria = {
  id: '9c12dbf4-3c86-4e7b-8d76-3ec5f5a7e6b7',
  clase: 'A',
  categoria: 'I',
  duracion: 40,
  totalPreguntas: 40,
  minAprobar: 35,
}

describe('Testing de las paginas', () => {
  // test('Renderizado correcto de la pagina Home', () => {
  //   const r = render(
  //     <BrowserRouter>
  //       <Home />
  //     </BrowserRouter>
  //   );
  //   expect(r).toBeTruthy();
  // });

  test('Listado de exámenes', () => {
    render(
      <BrowserRouter>
        <ListCategory />
      </BrowserRouter>
    )
    const textCat = 'Categoría I';
    const textCat2 = 'Categoría II-C';
    const result1 = screen.getByText(textCat);
    expect(result1).toBeInTheDocument()
    const result2 = screen.getByText(textCat2);
    expect(result2).toBeInTheDocument()
  });
})

describe('Renderizado del componente Categoría', () => {
  test('componente categoría', () => {
    const r = render(
      <BrowserRouter>
        <Category item={Categoria} />
      </BrowserRouter>)
    expect(r).toBeDefined()
  });
})

jest.mock('../providers/TestProvider.jsx', () => {
  return {
    useTestContext: () => {
      return {
        test: {
          id: '9c12dbf4-3c86-4e7b-8d76-3ec5f5a7e6b7',
          clase: 'A',
          categoria: 'I',
          duracion: 40,
          totalPreguntas: 40,
          minAprobar: 35
        },
        selectedTest: {
          id: '9c12dbf4-3c86-4e7b-8d76-3ec5f5a7e6b7',
          clase: 'A',
          categoria: 'I',
          duracion: 40,
          totalPreguntas: 40,
          minAprobar: 35
        },
        getTestList: jest.fn(),
        changeSelectedTest: jest.fn(),
      }
    },
  }
});

jest.mock('../providers/QuestionProvider.jsx', () => {
  return {
    useQuestionContext: () => {
      return {
        getQuestionList: () => ([
          {
            "NUM": 156,
            "MATERIA": "Materias generales",
            "CLASE-CATEGORIA": "BIIA",
            "TEMA": "Primeros Auxilios en caso de accidentes de tránsito",
            "PREGUNTA": "Para detener una hemorragia profusa se debe:",
            "RESPUESTA": "c",
            "FUNDAMENTO": "",
            "SECCION": "GENERALES",
            "OPCIONES": [
              {
                "value": "a",
                "description": "a) Poner una venda en la zona afectada del cuerpo"
              },
              {
                "value": "b",
                "description": "b) Lavar con agua la zona afectada del cuerpo para quitar cualquier residuo que pueda infectar la herida"
              },
              {
                "value": "c",
                "description": "c) Hacer compresión en la zona afectada"
              },
              {
                "value": "d",
                "description": "d) Todas las anteriores"
              }
            ]
          },
          {
            "NUM": 157,
            "MATERIA": "Materias generales",
            "CLASE-CATEGORIA": "BIIA",
            "TEMA": "Funcionamiento del Sistema Nacional de Emisión de Licencias de Conducir",
            "PREGUNTA": "Es una licencia de conducir que se obtiene por otorgamiento directo",
            "RESPUESTA": "d",
            "FUNDAMENTO": "Artículo 12 del Reglamento de Licencias",
            "SECCION": "GENERALES",
            "OPCIONES": [
              {
                "value": "a",
                "description": "a) Clase A Categoría II A"
              },
              {
                "value": "b",
                "description": "b) Clase A Categoría III C"
              },
              {
                "value": "c",
                "description": "c) Clase A Categoría II B"
              },
              {
                "value": "d",
                "description": "d) Clase A Categoría I"
              }
            ]
          }
        ])
      }
    }
  }
})

describe('Vista previa del examen', () => {
  test('renders correctly', () => {
    const { getByText } = render(<BrowserRouter><Test /></BrowserRouter>);
    expect(getByText('Simulacro')).toBeInTheDocument();
    expect(getByText('Licencia A I')).toBeInTheDocument();
    expect(getByText('Evaluación A I')).toBeInTheDocument();
  })
});