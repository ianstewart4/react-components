import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail 
                author="Bryan" 
                timeAgo="Today at 4:45PM" 
                content="Great job!" 
                avatar={faker.image.avatar()}/>
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:35AM" 
                content="Looking forward to your next post!" 
                avatar={faker.image.avatar()}/>
            <CommentDetail 
                author="Sam" 
                timeAgo="Yesterday at 4:45PM" 
                content="Another good one!" 
                avatar={faker.image.avatar()} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));