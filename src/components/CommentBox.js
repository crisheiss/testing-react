import React, { Component } from "react";

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = (event) => {
        // Doesn't rerender at that exact moment. It queues up as a task for React
        this.setState({comment: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({comment: ''})
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;