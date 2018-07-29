import React from 'react'

export default class App extends React.Component {
    render() {
        return <div>
            <button onClick={() => {
                this.props.handleButton1()
            }
            }>name1</button>
            <button onClick={() => {
                this.props.handleButton2()
            }}>name2</button>
            <button onClick={() => {
                this.props.handleButton3()
            }}>name3</button>

            <br/>
            <span>{this.props.name}</span>
        </div>
    }
}

