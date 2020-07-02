/// <reference types="cypress" />
import { mount } from 'cypress-vue-unit-test'
import HelloWorld from '../../src/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('Works awesomely', () => {
    // mount command comes from
    // https://github.com/bahmutov/cypress-vue-unit-test
    mount(HelloWorld, { propsData: {msg: 'Hello, Vue!'} })

    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.contains('h2', 'Hello, Vue!').should('be.visible')
  })
})
