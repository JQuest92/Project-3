import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/ChartAPI"
import Item from '../components/Chart';

class ChartItems extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getItems()
            .then(res => {
                console.log(res.data)
                this.setState({ items: res.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-4">
                        {this.state.items.length ? (
                            <div>
                                <h5>Saved Items</h5>
                                {this.state.items.map(item => (
                                    <Item
                                        key={item._id}
                                        label="Delete"
                                        id={item._id}
                                        category={item.category}
                                        name={item.name}
                                        quantity={item.quantity}
                                        notes={item.notes}
                                        date={item.date}
                                        btnFunc={() => this.deleteBtn(item._id)}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h5>No Items Saved</h5>
                            )}
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default ChartItems;