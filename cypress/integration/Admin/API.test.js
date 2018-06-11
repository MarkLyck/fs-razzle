import emptyData from '../../fixtures/emptyData.json'
import allPlans from '../../fixtures/allPlans.json'

describe('API', () => {
  it('show error message if no data is available', () => {
    cy.server()
    cy.route(
      'POST',
      'https://api.graph.cool/simple/v1/cj5p24f2bblwp0122hin6ek1u',
      {}
    )

    cy.visit('localhost:3000/dashboard/admin/api')
    cy.contains('Failed')
  })
  it('load FileDropper if data exists', () => {
    cy.server()
    cy.route(
      'POST',
      'https://api.graph.cool/simple/v1/cj5p24f2bblwp0122hin6ek1u',
      'fixture:allPlans'
    )
    cy.visit('localhost:3000/dashboard/admin/api')
    cy.get('[data-cy="drag-and-drop"]')
  })
})
