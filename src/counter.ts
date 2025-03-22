export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


export const squared = (n: number) => n * n


// in-source test suites, 
// Note: for import.meta.vitest update tsconfig.json compilerOptions.types=["vitest/importMeta"]
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('square', () => {
    expect(squared(2)).toBe(4)
     
  })
}
