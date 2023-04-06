/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';

const HostUrl = "http://localhost:3035";

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();
        this.initialSearch = true;
        this.state = {
            showingSearch: false,
            products: []
        };
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();
        this.setState({
            showingSearch: !this.state.showingSearch
        });
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     * We can add the debounce to 
     */
     onSearch(e){
        let url = `${HostUrl}/api/products?name=${e.target.value}`;
        fetch(url)
        .then(response => response.json())
        .then(products => this.setState({ products}));
        if(!e.target.value)
          this.initialSearch = true; 
        else
          this.initialSearch = false; 
     }
    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        const { products } = this.state;
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={(e) => this.showSearchContainer(e)}  >
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    <input type="text" onChange={(e) => this.onSearch(e)} />
                    <a href="#">
                        <i className="material-icons close">close</i>
                    </a>
                    { !this.initialSearch && <p className='search-count'> Total search results found: {products.length}</p>}
                    <div className='search-products'>

                    {
                    products.length > 0 && products.map((item, index)=>{
                      return(
                        <>
                            <div className="product" key={item._id}>
                                <div className='product-image'>
                                    <img src={item.picture} width="100" height="100" className='center'/>
                                </div>
                                <div className='product-name item center'>{item.name}</div>
                                <div className='product-name item center'>${item.price}</div>
                                <div className='product-name item center'>${item.about}</div>
                            </div>
                        </>
                      )
                    }) 
                }
                </div>
                </div>
                
            </header>
        );
    }


}

// Export out the React Component
module.exports = Menu;