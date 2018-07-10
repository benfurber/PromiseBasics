const PwndAPI = require('../PwndAPI')

describe('PwndAPI', () => {
  let pwndAPI

  beforeEach(() => {
    pwndAPI = new PwndAPI
  })

  describe('#call()', () => {
    it('Returns an empty array', () => {
      expect(pwndAPI.call()).toEqual([])
    })
  })

  describe('#_addOptions(emailAddress)', () => {
    it('adds the email address to the output', () => {
      let emailAddress = 'test@test.com'
      let expectedOutput = {
        method: 'GET',
        uri: 'https://haveibeenpwned.com/api/v2/breachedaccount/',
        body: emailAddress,
        json: true
      }
      expect(pwndAPI._addOptions(emailAddress)).toEqual(expectedOutput)
    })
  })
})
