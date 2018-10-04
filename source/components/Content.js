import React from 'react';
import Profile from "./Profile";
import Images from "./Images";
import Stories from "./Stories";
import Footer from "./Footer";

export default class Content extends React.Component {
    render() {
        return (
            <div className='content'>
                <Profile/>
                <Images/>
                <Footer/>
            </div>
        );
    }
}
