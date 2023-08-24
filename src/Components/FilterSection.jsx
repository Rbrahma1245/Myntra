import React from 'react'

function FilterSection() {
    return (
        <div className='w-25 ' style={{ padding: "20px 0px 5px 20px" }}>

            <h6>FILTERS</h6>


            <form>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Men
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Women
                    </label>
                </div>
            </form>
            <br />

            <h6>PRICE</h6>

            <select>
                <option>Low to High</option>
                <option>High to Low</option>
            </select>

        </div>
    )
}

export default FilterSection