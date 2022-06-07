import { ethers } from 'hardhat'
import { expect } from 'chai'
import { SimpleContract, SimpleContract__factory } from '../@types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

describe('Test Contract', () => {
  let owner: SignerWithAddress
  let TokenFac: SimpleContract__factory
  let token: SimpleContract
  beforeEach(async () => {
    ;[owner] = await ethers.getSigners()

    TokenFac = (await ethers.getContractFactory(
      'Token',
    )) as SimpleContract__factory
    token = await TokenFac.deploy()
  })

  describe('Deployment', () => {
    it('Should set the right owner', async () => {
      expect(await token.owner()).to.equal(owner.address)
    })
  })
})
