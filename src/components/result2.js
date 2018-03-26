import React, { Component } from 'react';
import _ from 'lodash';

class Change extends Component {
    render() {
        return (
            <div>
                <h2>跳Component成功，以下為留言板內容</h2>
                {_.map(this.props.children, (value, index) =>
                    <p key={index}>{value.name}：{value.leave}</p>
                )
                }
            </div>
        );
    }
}


export default Change;