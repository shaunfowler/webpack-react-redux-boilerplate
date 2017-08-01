import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as itemActions from '../actions/itemActions';

class Home extends React.Component {
    constructor(state) {
        super(state);
        this.state = {
            item: {
                name: ''
            }
        };

        this.onItemNameChange = this.onItemNameChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    onItemNameChange(event) {
        const item = this.state.item;
        item.name = event.target.value;
        this.setState({item});
    }

    onAddItem() {
        this.props.createItem(this.state.item);
        this.setState({
            item: {
                name: ''
            }
        });
    }

    itemRow(item, index) {
        return (
            <li key={index}>{item.name}</li>
        );
    }

    render() {
        return (
            <div>
                <h1>Home</h1>

                <p>
                    <input type='text' onChange={this.onItemNameChange} placeholder='Item name' value={this.state.item.name}/>
                    <button onClick={this.onAddItem}>Add</button>
                </p>

                {this.props.items.length === 0
                    ? <div><i>No items</i></div>
                    : ''}

                <ul>
                    {this.props.items.map(this.itemRow)}
                </ul>
            </div>
        );
    }
}

Home.propTypes = {
    items: PropTypes.array.isRequired,
    createItem: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {items: state.items};
}

function mapDispatchToProps(dispatch) {
    return {
        createItem: item => dispatch(itemActions.createItem(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
