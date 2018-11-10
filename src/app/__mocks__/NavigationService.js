const Navigation = jest.genMockFromModule('Navigation')

const navigate = (path) => path

Navigation.navigate = navigate

module.exports = Navigation