import React from 'react'
import Stack from 'react-bootstrap/esm/Stack'
import IntroMeme from '../Images/nftx-introduction-meme.jpg'

function Intro() {
  return (
    <div>
        <Stack gap={4}>

            <div>
                <h3 style={{float: `left`}}>Introduction</h3>
            </div>

            <div>
                <img src={IntroMeme} className='w-100'></img>
            </div>

            <div>
                <p style={{float: `left`}}>The NFT Apocalypse Dao would connect augmented reality(AR/VR) with Decentralized Finance (DeFi) and Non-Fungible Tokens (NFT's) across multiple blockchains while rewarding holders and creators.</p>
            </div>

            <div>
                <p>
                NFT Apocalypse is the first MultiChain NFT MetaVerse platform adding value to both holders and digital creators. Don't miss!!!
                </p>
            </div>

        </Stack>
    </div>
  )
}

export default Intro