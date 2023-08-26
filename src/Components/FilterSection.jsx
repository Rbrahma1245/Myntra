import React from 'react'

function FilterSection({setForm}) {
   

    function commonHandler(e) {
        let { name, value } = e.target
        setForm((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <div className='w-25 ' style={{ padding: "20px 0px 5px 20px" }}>

            <h6>FILTERS</h6>


            {/* <form>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" >
                        Men
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" >
                        Women
                    </label>
                </div>
            </form> */}
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