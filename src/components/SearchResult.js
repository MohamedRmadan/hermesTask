import React, { Component } from 'react'
// REDUX 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//UI COMPONENTS
import { Container, 
    Row, 
    Col, 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    Input, 
    CardText, 
    CardImg} from 'reactstrap'
import {BsHeart } from 'react-icons/bs'
import {FcLike } from 'react-icons/fc'
import ReactStars from "react-rating-stars-component";

//GET PRODUCTS ACTION
import { getProducts } from '../actions/productsActions';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //search input string
            searchInput: '',
            //choosen brands check boxes array
            filteredProductsBrands: []
        }
    }

    componentDidMount(){
        //get products array
        this.props.getProducts();
    }

    //On Search Input Changes Method 
    onSearchInputChange = e => {
        this.setState({
            searchInput: e.target.value,
        })
    }

    //On Product Brand Checked Method 
    onProductBrandChecked = e => {
        //If Check Is TRUE add brand to choosen brands array
        if(e.target.checked){
                if (!this.state.filteredProductsBrands.includes(e.target.value)){
                    this.setState({
                        filteredProductsBrands: [...this.state.filteredProductsBrands, e.target.value]
                    })
                }
        }
        //If Check Is FALSE remove brand to choosen brands array
        else{
            var array = this.state.filteredProductsBrands;
            var index = array.indexOf(e.target.value);
            array.splice(index,1);
            this.setState({
                filteredProductsBrands: array
            })      
        }
        
    }
    
    render(){
        //products original array
        const {products} = this.props.products;

        // original products array BRANDS(make a unique array and sum the dublicated brands)
        let productBrands = [];
        void products.map(product => {
            const id = productBrands.findIndex(productBrand => productBrand.name === product.brand);
            if( id === -1){
                productBrands.push({name : product.brand, sum: 1})
            }else{
                productBrands[id].sum++;
            }
        })

        //FILTERATION
        //filter using search input
        let filteredProducts = products.filter(product => product.desc.includes(this.state.searchInput));
        //filter using Brands checkBoxes
        let finalFilteredProducts= [];
        if(this.state.filteredProductsBrands.length > 0){
            filteredProducts.map(product => {
                this.state.filteredProductsBrands.map(brand => {
                    if(product.brand === brand){
                        finalFilteredProducts.push(product)
                    }
                })
            })
        }else{
            finalFilteredProducts= filteredProducts;
        }

        //discount value
        const discount = 0.8;
        //Installment profit value
        const installmentProfit = 1.05;

        return(
            <div className='App-body'>
                
                <Container>
                    <Row>
                        {/* Filter Column */}
                        <Col xs='3'>
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        Search
                                    </CardTitle>
                                    <CardSubtitle>
                                        {/* Filter Search word */}
                                        <Input 
                                            placeholder="Search" 
                                            type='text' 
                                            id='searchInput'
                                            name='searchInput'
                                            onChange={this.onSearchInputChange}/>
                                    </CardSubtitle>
                                    <CardText>
                                        {/* Filter By Brands */}
                                        {productBrands.map(productBrand => 
                                            (<div key={productBrand.value} style={{marginLeft: '20px'}}>
                                                <Input 
                                                type='checkbox'
                                                id='brandCheckbox'
                                                value={productBrand.name}
                                                onChange = {this.onProductBrandChecked}/> {' '}
                                                <p>{productBrand.name} ({productBrand.sum})</p>
                                            </div>)
                                        )}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* Data Column */}
                        <Col>
                            <Row>
                                {finalFilteredProducts.map(product => (
                                    <Card style={{ padding: '10px', margin:'5px', width:'250px'}}>
                                        <BsHeart className='align-end' style={{display : product.favorite ? 'none' : ''}} />
                                        <FcLike className='align-end' style={{display : !product.favorite ? 'none' : ''}}/>
                                        <CardImg src={product.imgPath} />
                                        <CardTitle>
                                            <p style={{fontSize: '13px'}}>{product.desc}, {product.size} cm, {product.color}</p>
                                        </CardTitle>
                                        <CardSubtitle>
                                            <ReactStars
                                                count={5}
                                                edit={false}
                                                value={product.rating}
                                            />
                                        </CardSubtitle>
                                        <CardTitle>
                                            <p>{product.price * discount} EGP <strike style={{color:'#919191', fontSize: '13px'}} >{product.price} EGP </strike> </p>   
                                            <p style={{color:'#919191' , fontSize: '10px'}}>{product.price * installmentProfit / 12} EGP / 12 months</p>   
                                        </CardTitle>
                                    </Card>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>  
        ) 
    }
}

SearchResult.propTypes = {
    getProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    products: state.products
});


export default connect(mapStateToProps, {
    getProducts
})(SearchResult);