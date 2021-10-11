import React from 'react'

const Pagination = ({phrasalPerPage, totalPhrasal, paginate}) => {
    
    const pageNumbers = [];
console.log("ENTRE PAGI")
console.log(phrasalPerPage)
console.log(totalPhrasal)
    for(let i = 1 ; i <= Math.ceil(totalPhrasal / phrasalPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} >
                            <a href="!#" onClick = {()=>paginate(number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;

