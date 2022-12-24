import React from 'react';
import ProductComponent from '../ProductComponent';

function ProductListing() {
    return(
        <div className='productlisting'>
            <div className='container'>
                <ProductComponent/>
            </div>
        </div>
    )
}

export default ProductListing