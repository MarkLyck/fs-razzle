import emptyData from '../../fixtures/emptyData.json'
import allPlans from '../../fixtures/allPlans.json'

describe('API', () => {
  it('show error message if no data is available', () => {
    cy.server()
    cy.visit('localhost:3000/dashboard/admin')
    cy.route(
      'POST',
      'https://api.graph.cool/simple/v1/cj5p24f2bblwp0122hin6ek1u',
      {
        data: emptyData,
      }
    )

    cy.contains('API').click()
    cy.url().should('include', '/admin/api')
    cy.contains('Failed')
  })
  it('load FileDropper if data exists', () => {
    cy.server()
    cy.reload()
    cy.route(
      'POST',
      'https://api.graph.cool/simple/v1/cj5p24f2bblwp0122hin6ek1u',
      {
        data: allPlans,
      }
    )

    cy.contains('API').click()
    cy.contains('Drag and drop JSON')
  })
})
