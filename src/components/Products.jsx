import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function Products() {
    const [data, setData] = useState()

    const { Meta } = Card;

    const fetchUserData = async () => {
        await fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
        setData(response)
    }

    console.log(data)

    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <>
            <div>
                <h1>Products</h1>
            </div>

            <Row>
                <Col lg={4} md={4} sm={6}>
                    {
                        data.map(data => (
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src={data.image} />}
                            >
                                <Meta title={data.title} description={data.description} />
                            </Card>
                        ))
                    }
                </Col>
            </Row>

        </>
    )
}

export default Products
