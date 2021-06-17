import React from 'react';
import styled from 'styled-components'

const Item = styled.div`
    border-radius: 10px;
    padding: 14px;
    margin-bottom: 7px;
    text-align: center;
`


class ToDoItem extends React.Component {
    static defaultProps = {
        done: false
    }
    state = {
        done: this.props.done
    }

    // componentUnmount = () => {
    //     this.setState({ tasks: [] })
    // }

    toggleDone = () => {
        this.setState({ done: !this.state.done })

        // const timeoutTask = setTimeout(this.componentUnmount, 1000)
        // this.setState({ timeoutTask })
    }

    // componentWillUnmount = () => clearTimeout(this.timeoutTask)

    render() {
        const { text } = this.props

        return (
            <Item onClick={this.toggleDone} className={this.state.done ? 'doneTodo' : 'undone'}>
                <p>{text}</p>
            </Item>
        )
    }
}

export default ToDoItem