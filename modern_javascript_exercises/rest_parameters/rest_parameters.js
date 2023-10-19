// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...numbers) {
  // Add a loop here

  return numbers.reduce((accumulator, number) => accumulator+number, 0)
}