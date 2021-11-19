import Flow from

it('Test the flow', () => {
  mount(<Flow
    elements={elements}
    setElements={setElements}
    saveForUndo={saveForUndo}
    flowID={flowID}
  />);
  cy.get('#test')
});