import React from 'react';
import {connect} from 'react-redux';
import * as itemActions from '../actions/itemActions';

class Home extends React.Component {

    constructor(state) {
        super(state);
        this.state = {
            item: {
                name: ''
            }
        }

        this.onItemNameChange = this.onItemNameChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    onItemNameChange(event) {
        const item = this.state.item;
        item.name = event.target.value;
        this.setState({item});
    }

    onAddItem() {
        this.props.dispatch(itemActions.createItem(this.state.item));
        this.setState({
            item: {
                name: ''
            }
        })
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

                <h2>Items</h2>

                <h3>Add item</h3>
                <input type="text" onChange={this.onItemNameChange} value={this.state.item.name}/>
                <button onClick={this.onAddItem}>Add</button>

                <h3>Existing items</h3>
                {this.props.items.length === 0 ? <div>No items</div> : ''}
                <ul>
                    {this.props.items.map(this.itemRow)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {items: state.items};
}

export default connect(mapStateToProps)(Home);
