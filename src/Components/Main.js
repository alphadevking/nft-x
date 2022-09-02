import React from 'react'
import '../App.css'
import Stack from 'react-bootstrap/esm/Stack'
import Card from 'react-bootstrap/Card';
import BackgroundParallax from '../Images/nftx-cover.png'
import Container from 'react-bootstrap/esm/Container';
import Intro from './Intro';
import NFTxUtility from './NFTxUtility';
import Tokenomics from './Tokenomics';
import SmartContractAddress from './SmartContractAddress';
import Airdrop from './Airdrop';
import Listing from './Listing';
import BuySell from './BuySell';
import Upcoming from './Upcoming';

function Main() {
  return (
    <div className='mt-5 pt-5'>
        <Stack gap={1}>
            
            <Stack className='bg-real-dark text-white'>
                <Container>
                    <Card className="border-0 rounded-0 container" style={{backgroundColor: `black`}}>
                        <Card.Img src={BackgroundParallax} alt="Card image" style={{maxWidth: `150px`}}/>
                        <Card.ImgOverlay className='border-0 rounded-0 p-5 mt-5'>
                            <h2 className='bg-real-dark p-1'>The first MultiChain MetaVerse NFT platform rewarding both holders and digital creators</h2>
                        </Card.ImgOverlay>
                        
                    </Card>
                </Container>
            </Stack>

        </Stack>

        <Stack gap={5} className='mt-5'>
            <Intro />
            <NFTxUtility />
            <Tokenomics />
            <SmartContractAddress />
            <Airdrop />
            <Listing />
            <BuySell />
            <Upcoming />
        </Stack>

    </div>
  )
}

export default Main