import React from 'react';
import Link from "./Link";
import links from '../theme/assets/links'

export default class Links extends React.Component {
    render() {
        const linksJSX = links.map((link) => {
            return (
                <Link
                    key={link.id}
                    message={link.message}
                />
            );
        });

        return <ul>{linksJSX}</ul>;
    }
}
