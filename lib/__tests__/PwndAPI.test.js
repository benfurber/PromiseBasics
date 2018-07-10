const PwndAPI = require('../PwndAPI')

describe('PwndAPI', => {
  let pwnAPI
  
  beforeEach(() => {
    pwnAPI = new PwnAPI
  })

  it('Returns an array (?)', => {
    expect(pwnAPI.call()).toEqual([])
  })
})
