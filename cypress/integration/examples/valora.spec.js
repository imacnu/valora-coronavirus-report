import {user} from '../../../config';
describe("Valora prevencion Coronavirus status", () => {
    const url = 'https://forms.office.com/Pages/ResponsePage.aspx?id=PJhKgfzHbEydD_KL-W_KTuKlwDdCFUVKuSveOZivMHFUODU3TUFNM1ZOTks2S1NFMlQ2RFBPVkk5Ry4u'
    const userInput = '.office-form-question-textbox'
    const status = '[type="radio"][aria-posinset=3]'
    const remote = ':nth-child(5) > .office-form-question-content > .office-form-question-element > [role="radiogroup"] > :nth-child(3) > .radio > .office-form-question-choice-row > input'
    const send = '.office-form-button-container > .office-form-theme-primary-background > .button-content'

    context('WHEN load fucking Valora website ... ', () => {
      before(() =>  {
        cy.visit(url)
      });
      it("THEN fill form ...", () => {
        cy.get(userInput)
          .type(user)
          .should('have.value', user)
        cy.get(status)
          .check()
          .should('have.value', 'No')
        cy.get(remote).check()
          .should('have.value', 'Sí')
      });
      after(() => {
        cy.get(send).click()
      });
    });
});


