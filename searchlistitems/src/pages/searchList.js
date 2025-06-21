import React from 'react'

function SearchList({ searchfileterdData }) {
    return (
        <div>{searchfileterdData.length > 0 &&
            (
                searchfileterdData.map((user, id) => {
                    return <div key={user.id}>
                        <div>{user.name}</div>
                    </div>

                })
            )
        }</div>
    )
}

export default SearchList