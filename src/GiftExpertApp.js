import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GiftGrid from './components/GiftGrid'

const GiftExpertApp = () => {

    //const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball' ]

    const [ categories, setCategories ] = useState([ 'Pokemon' ])

    return(
        <div>
            <h2>GiftExpertApp</h2>
            <hr/>
            <AddCategory setCategories = { setCategories } />
            <ol>
                {
                    categories.map( category => <GiftGrid key = { category } category = { category } /> )
                }
            </ol>
        </div>
    )

}

export default GiftExpertApp