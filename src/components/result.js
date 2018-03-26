import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShowMessage } from '../actions/ShowMessage';
import _ from 'lodash';

class result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    render() {
        return (
            <div>
                <h1>恭喜你跳頁成功，以下為留言板內容</h1>
                {_.map(this.props.data, (value, index) =>
                    <p key={index}>{value.name}：{value.leave}</p>
                )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        data: state.data
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        ShowMessage: () => {
            dispatch(ShowMessage());
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(result);