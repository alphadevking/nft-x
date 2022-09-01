import React from 'react'
import '../App.css'
import Stack from 'react-bootstrap/esm/Stack'
import Card from 'react-bootstrap/Card';
import BackgroundParallax from '../Images/nftx-cover.png'
import Container from 'react-bootstrap/esm/Container';
import Intro from './Intro';

function Main() {
  return (
    <div className=''>
        <Stack gap={3}>
            
            <Stack className='bg-real-dark text-white mb-3'>
                <Container >
                    <Card className="border-0 rounded-0 container" style={{backgroundColor: `black`}}>
                        <Card.Img src={BackgroundParallax} alt="Card image" style={{maxWidth: `200px`}}/>
                        <Card.ImgOverlay className='bg-real-dark border-0 rounded-0 p-1' style={{marginTop: `20%`}}>
                            <h2 className=''>The first MultiChain MetaVerse NFT platform rewarding both holders and digital creators</h2>
                        </Card.ImgOverlay>
                    </Card>
                </Container>
            </Stack>

        </Stack>

        <Stack>
            <Container >
                <Intro />
            </Container>
        </Stack>
    </div>
  )
}

export default Main