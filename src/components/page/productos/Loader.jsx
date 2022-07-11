import React from 'react'

const Loader = ({ loading }) => {
    return (
        <>
            <h2>{loading &&
                <>
                    <span class="loader"></span>
                </>
            }</h2>
        </>
    )
}

export default Loader