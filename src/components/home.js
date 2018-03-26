import React, { Component } from 'react';
import './home.css';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { AddMessage } from '../actions/AddMessage';
import ChangeComponent from '../components/result2';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import moment from 'moment';

class home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            leave: ''
        }
        this.handleMessage = this.handleMessage.bind(this);
        this.handleMessage2 = this.handleMessage2.bind(this);
    }

    handleMessage(event) {
        this.setState({ name: event.target.value });
    }

    handleMessage2(event) {
        this.setState({ leave: event.target.value });
    }

    sendMessage = () => {
        this.props.addMessage({ name: this.state.name, leave: this.state.leave, time: moment().format('LLL') });
    }

    sendMessage2 = () => {
        browserHistory.push('/result');
    }

    sendMessage3 = () => {
        ReactDOM.render(<ChangeComponent>{this.props.data}</ChangeComponent>, document.getElementById('change'))
    }

    render() {
        return (
            <div className="home">
                <header className="home-header">
                    <img src={logo} className="home-logo" alt="logo" />
                    <h1 className="home-title">Welcome to React</h1>
                </header>
                <div className="card">
                    <input type="text" className="inp-text" placeholder="請輸入姓名" onChange={this.handleMessage} />
                    <input type="text" className="inp-text" placeholder="請輸入留言內容" onChange={this.handleMessage2} />
                    <br />
                    <button type="submit" onClick={this.sendMessage}>送出 至下面</button>
                    <button type="submit" onClick={this.sendMessage2}>跳頁顯示</button>
                    <button type="submit" onClick={this.sendMessage3}>跳Component顯示</button>
                </div>
                <div className="card2" id="change">
                    <p>以下為留言板內容</p>
                    <hr /> 
                    {_.map(this.props.data, (value, index) =>
                        <p key={index}>姓名：{value.name} {value.time}：{value.leave}</p>
                    )
                    }
                </div>
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
        addMessage: (data) => {
            dispatch(AddMessage(data));
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(home);