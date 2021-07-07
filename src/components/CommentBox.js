import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
    state = { comment: '' };

    shouldNavigateAway() {
        if (!this.props.auth) {
            console.log("I need to leave")
        }
    }

    // Component just rendered
    componentDidMount() {
        this.shouldNavigateAway()
    }
    // Component just got updated
    componentDidUpdate() {
        this.shouldNavigateAway()   
    }

    handleChange = (event) => {
        // Doesn't rerender at that exact moment. It queues up as a task for React
        this.setState({comment: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    };

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
            <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps , actions)(CommentBox);