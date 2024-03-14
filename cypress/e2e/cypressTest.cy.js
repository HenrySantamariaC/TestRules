/* eslint-disable no-undef */
describe('Testing con cypress', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173')
  })
  it('Renderizado de la pagina en local', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Simula Test')
  })
  it('Renderizado de la lista examenes por categoria', () => {
    cy.contains('Categoria I')
    cy.contains('Categoria II-C')
  });
  it('Renderizado de la primera categoria', () => {
    cy.contains('Categoria I').click()
    cy.contains('Iniciar')
  });
  it('Renderizado de las preguntas', () => {
    cy.contains('Categoria I').click()
    cy.contains('Iniciar').click()
    cy.get('ul').children()
  });
})