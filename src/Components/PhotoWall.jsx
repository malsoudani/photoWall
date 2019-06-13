import React, {Component} from 'react';
import reactDOM from 'react-dom';
import Photo from './Photo';

class PhotoWall extends Component {
    render() {
        return  <div className="photo-grid">
                    {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}
                </div>
    }
}

export default PhotoWall;
