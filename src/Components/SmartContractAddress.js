import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiCopy } from 'react-icons/fi';
import { Button } from 'react-bootstrap';

function SmartContractAddress() {
  return (
    <div>

        <Container>

            <Stack gap={4} style={{textAlign: `left`}}>

                <div>
                    <h3 style={{fontWeight: 'bold'}}>Smart Contract Address</h3>
                </div>

                <div>
                    <p>We are a revolutionary project already existing on four(4) Blockchains with the same smart contract address.</p>

                    <InputGroup className="mb-3">

                        <Form.Control className='text-white border-0'
                        value="    Address:    0xda5dea132f9c30f2f6b513266795fec16426c0c6" style={{fontSize: `15px`, backgroundColor:` #1f2937`}}/>
                        <button className='text-light bg-real-dark rounded-5 border-0 mt-1'><FiCopy className='mb-1' style={{fontSize: `20px`}}/></button>

                    </InputGroup>

                </div>

                <div>
                    <button className='p-3 rounded-3'>
                        View on Binance Smart Chain
                    </button>
                </div>

                <div>
                    <button className='p-3 rounded-3'>
                        View on Huobi Blockchain
                    </button>
                </div>

                <div>
                    <button className='p-3 rounded-3'>
                        View on xDai MainNet
                    </button>
                </div>

                <div>
                    <button className='p-3 rounded-3'>
                        View on Fantom Opera(FTM)
                    </button>
                </div>


            </Stack>

        </Container>

    </div>
  )
}

export default SmartContractAddress