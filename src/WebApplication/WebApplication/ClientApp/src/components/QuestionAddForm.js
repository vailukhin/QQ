﻿import React, { Component } from "react";


export default class QuestionAddForm extends Component {
    static displayName = QuestionAddForm.name;

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            answer: ''
        };


        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(e) {
        let newState = {};
        newState[e.target.name] = e.target.value;

        this.setState(newState);
    }

    render() {

        

        return (
            <div>
                <form className='question-add-form' onSubmit={this.props.handleSubmit}>
                    <lable>Вопрос <input type='text' name='text' onChange={this.handleChange} /></lable>
                    <lable>Ответ <input type='text' name='answer' onChange={this.handleChange} /></lable>
                    <div><input className='btn' type='submit' value='Сохранить'  /></div>
                </form>
            </div>);
    }
}