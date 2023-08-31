import React from 'react'

function FilterSection({setForm}) {
   

    function commonHandler(e) {
        let { name, value } = e.target
        setForm((prev) => {
            return { ...prev, [name]: value }

           
        })
    }

   

    return (
        <div className='w-25 smwidth' style={{ padding: "20px 0px 5px 20px" }}>

            <h6>FILTERS</h6>

            <label className="gender"> <input type="radio" name="gender" value="men" onChange={commonHandler} /> Men</label>
            
            <label> <input type="radio" name="gender" value="women" onChange={commonHandler} /> Women</label>
                 
            <br />
            <br />

            <h6>PRICE</h6>

            <select name='price' onChange={commonHandler}>
                <option name="LowToHigh">Low to High</option>
                <option name="HighToLow">High to Low</option>
            </select>

        </div>
    )
}

export default FilterSection