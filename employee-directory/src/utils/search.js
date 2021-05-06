function searchFilter(results, searchTerm) {
    let filteredResults = [];
    results.forEach((result) => {
        if (result.name.first.toLowerCase().search(searchTerm) !== -1|| result.name.last.toLowerCase().search(searchTerm) !== -1) {
            filteredResults.push(result)
        }
    })
    return filteredResults
}

export default searchFilter