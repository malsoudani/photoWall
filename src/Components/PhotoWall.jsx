import React, {Component} from 'react';
import reactDOM from 'react-dom';
import Photo from './Photo';

class PhotoWall extends Component {
    render() {
        return  <div>
                    {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
                </div>
    }
}

export default PhotoWall;
