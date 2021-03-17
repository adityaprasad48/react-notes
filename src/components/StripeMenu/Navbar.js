import React from 'react'
import DropdownOption from './DropdownOption'
import { Container } from './styles'

const Navbar = () => {
    return (
        <Container>
            <ul>
                <li>
                    <DropdownOption name="Products" content={() => <h1>Products</h1>}/>
                     
                </li>

                <li>
                    <DropdownOption name="Service" content={() => <h1>Service</h1>}/>
                     
                </li>

                <li>
                    <DropdownOption name="Payment" content={() => <h1>Payment</h1>}/>
                     
                </li>

                <li>
                    <DropdownOption name="Dashboard" content={() => <h1>Dashboard</h1>}/>
                     
                </li>

            </ul>
        </Container>
    )
}

export default Navbar
