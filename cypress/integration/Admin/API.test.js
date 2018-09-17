describe('API', () => {
  it('show error message if no data is available', () => {
    cy.server()

    cy.route('POST', 'https://api.graph.cool/simple/v1/cj5p24f2bblwp0122hin6ek1u', {})

    cy.visit('localhost:3000/dashboard/admin/api')
    cy.contains('something went wrong')
  })
})
