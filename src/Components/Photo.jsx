import React, {Component} from 'react';
import reactDOM from 'react-dom';

class Photo extends Component {
    render() {
        return  <div>
                    <img src={this.props.post.imageLink} alt={this.props.post.description} id={this.props.post.id}></img>
                </div>
    }
}

export default Photo;