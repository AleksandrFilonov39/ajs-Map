import ErrorRepository from '../app'

test('add error success', () => {
    const newError = new ErrorRepository();
    newError.addError(418, "418 I'm a teapot");
    expect(1).toBe(newError.errors.size)
})

test('return description error success', () => {
    const newError = new ErrorRepository();
    newError.addError(418, "418 I'm a teapot");
    expect("418 I'm a teapot").toBe(newError.translate(418))
})

test('fail return description error', () => {
    const newError = new ErrorRepository();
    newError.addError(418, "418 I'm a teapot");
    expect('Unknown error').toBe(newError.translate(419))
})



