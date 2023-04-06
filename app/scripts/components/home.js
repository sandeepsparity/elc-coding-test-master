/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';

class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        const {loading = false } = this.props;
      return (
         <section id="home">
                
            </section>
        );
    }


}

// const data = [
//   {
//     src:
//       'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
//     title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
//     channel: 'Don Diablo',
//     views: '396 k views',
//     createdAt: 'a week ago',
//   },
//   {
//     src:
//       'https://i.ytimg.com/vi/ycHr1G0Gffg/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAS6ZJ5RYa2R3Ksp9d8cLzY_8DMOA',
//     title: 'Top Latino Songs 2019 - Luis Fonsi, Ozuna, Nicky Jam…',
//     channel: 'Dj Yanky Plus',
//     views: '2.1 M views',
//     createdAt: '4 months ago',
//   },
//   {
//     src:
//       'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
//     title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
//     channel: 'Calvin Harris',
//     views: '130 M views',
//     createdAt: '10 months ago',
//   },
// ];


// // Export out the React Component
module.exports = Home;


