import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'

function Upcoming() {
  return (
    <div>

        <Container>

            <Stack gap={4} style={{textAlign: `left`}}>

                <div>
                    <h3 style={{fontWeight: 'bold'}}>Upcoming</h3>
                </div>

                <div>
                    <ul>

                        <li className='p-2'>NFTx Governanace Staking</li>

                        <li className='p-2'>NFTx Galleria</li>

                    </ul>
                </div>

                <div>
                    <p>With NFTx, you'll be able to send (buy or sell) your NFTs accross different blockchains from one platform. Stake NFTx to earn more NFTx. NFTx is the governance token for the NFT Apocalypse Metaverse, all holders have a right in determining how network resources are allocated.</p>
                </div>

            </Stack>

        </Container>

    </div>
  )
}

export default Upcoming