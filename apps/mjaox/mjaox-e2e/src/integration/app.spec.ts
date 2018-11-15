/// <reference types="cypress" />

import { getLogo } from '../support/app.po';

describe('Mjaox', () => {
  beforeEach(() => cy.visit('/'));

  it('should display logo', () => {
    getLogo().should('exist');
  });
});
