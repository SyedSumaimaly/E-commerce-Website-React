import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <p >Copyright © 2023 <a href="#">Syed Sumaim Ali</a>.</p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
