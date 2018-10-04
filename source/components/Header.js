import React from 'react';
import Stories from "./Stories";

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='logo'/>
                <input
                    placeholder='Search'
                    type='text'
                />
                <div className='nav'>
                    <div className='explore'/>
                    <div className='likes'/>
                    <div className='settings'/>
                </div>
            </div>

        );
    }
}
