class PwndAPI {
  constructor () {}

  call () {
    this._addOptions('test@test.com')
    return []
  }

  _addOptions (emailAddress) {
    return {
      method: 'GET',
      uri: 'https://haveibeenpwned.com/api/v2/breachedaccount/',
      body: emailAddress,
      json: true
    }
  }
}

module.exports = PwndAPI
