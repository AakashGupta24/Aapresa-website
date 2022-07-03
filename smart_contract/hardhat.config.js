// https://eth-ropsten.alchemyapi.io/v2/mrQB9yXi1NZAhtewGjQmXzuc4hZafeph

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks:{
    ropsten : {
      url : 'https://eth-ropsten.alchemyapi.io/v2/mrQB9yXi1NZAhtewGjQmXzuc4hZafeph',
      accounts:['76ebb066a841da166905263f272a80a83b23b6bc4697b59f1b43a8dc4136d4e1']
    }
  }
}