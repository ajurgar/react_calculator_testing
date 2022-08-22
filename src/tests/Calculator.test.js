import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })


it('should add numbers and show total', () => {
  const fourKey = container.getByTestId("number4");
  fireEvent.click(fourKey)
  const plus = container.getByTestId("operator-add");
  fireEvent.click(plus)
  const oneKey = container.getByTestId("number1");
  fireEvent.click(oneKey)
  const equal = container.getByTestId("operator-equals");
  fireEvent.click(equal)
  const runningTotal = container.getByTestId("running-total");
  expect(runningTotal.textContent).toEqual('5')
})

it('should subtract numbers and show total', () => {
  const sevenKey = container.getByTestId("number7");
  fireEvent.click(sevenKey)
  const subtract = container.getByTestId("operator-subtract");
  fireEvent.click(subtract)
  const fourKey = container.getByTestId("number4");
  fireEvent.click(fourKey)
  const equal = container.getByTestId("operator-equals");
  fireEvent.click(equal)
  const runningTotal = container.getByTestId("running-total");
  expect(runningTotal.textContent).toEqual('3')
})

it('should multiply numbers and show total', () => {
  const threeKey = container.getByTestId("number3");
  fireEvent.click(threeKey)
  const multiply = container.getByTestId("operator-multiply");
  fireEvent.click(multiply)
  const fiveKey = container.getByTestId("number5");
  fireEvent.click(fiveKey)
  const equal = container.getByTestId("operator-equals");
  fireEvent.click(equal)
  const runningTotal = container.getByTestId("running-total");
  expect(runningTotal.textContent).toEqual('15')
})

it('should divide numbers and show total', () => {
  const twoKey = container.getByTestId("number2");
  fireEvent.click(twoKey)
  const oneKey = container.getByTestId("number1");
  fireEvent.click(oneKey)
  const divide = container.getByTestId("operator-divide");
  fireEvent.click(divide)
  const sevenKey = container.getByTestId("number7");
  fireEvent.click(sevenKey)
  const equal = container.getByTestId("operator-equals");
  fireEvent.click(equal)
  const runningTotal = container.getByTestId("running-total");
  expect(runningTotal.textContent).toEqual('3')
})

it('should concatenate multiple number of button clicks', () =>{

  const twoKey = container.getByTestId("number2");
  fireEvent.click(twoKey)
  fireEvent.click(twoKey)
  const runningTotal = container.getByTestId("running-total");
  expect(runningTotal.textContent).toEqual('22')
  
})

it('should chan multiple operators together', () => {
  const twoKey = container.getByTestId("number2");
  fireEvent.click(twoKey)
  const oneKey = container.getByTestId("number1");
  fireEvent.click(oneKey)
  const divide = container.getByTestId("operator-divide");
  fireEvent.click(divide)
  const sevenKey = container.getByTestId("number7");
  fireEvent.click(sevenKey)
  const multiply = container.getByTestId("operator-multiply");
  fireEvent.click(multiply)
  fireEvent.click(sevenKey)
  const equal = container.getByTestId("operator-equals");
  fireEvent.click(equal)
  const runningTotal = container.getByTestId("running-total");
  expect(runningTotal.textContent).toEqual('21')
})

it('should clear running total without affecting calculation', () => {
  const twoKey = container.getByTestId("number2");
  fireEvent.click(twoKey)
  const oneKey = container.getByTestId("number1");
  fireEvent.click(oneKey)
  const divide = container.getByTestId("operator-divide");
  fireEvent.click(divide)
  const sevenKey = container.getByTestId("number7");
  fireEvent.click(sevenKey)
  const equal = container.getByTestId("operator-equals");
  fireEvent.click(equal)
  const clear = container.getByTestId("clear")
  fireEvent.click(clear)
  const multiply = container.getByTestId("operator-multiply");
  fireEvent.click(multiply)
  fireEvent.click(sevenKey)

  
  fireEvent.click(equal)
  const runningTotal = container.getByTestId("running-total");
  expect(runningTotal.textContent).toEqual('21')
  
})



})

