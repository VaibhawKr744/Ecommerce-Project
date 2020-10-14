import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss';

class Directory extends React.Component {
    state = {
        sections: [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
            },
            {
                title: 'mens',
                imageUrl: 'https://cdn.miscellaneoushi.com/2560x1600/20121019/models%20men%20sunglasses%20train%20stations%20bokeh%20leather%20jacket%20male%20models%202560x1600%20wallpaper_www.miscellaneoushi.com_33.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
            }
        ]
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}
export default Directory;