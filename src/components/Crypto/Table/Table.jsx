function Table({coins,query}) {

    let keys=["name","rank","price"];

    return ( 
        <>
            <div className="table_wrapper ">
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
        
        {
            coins?
            coins.filter(coin=>
                {
                    return keys.some((key)=>
                    {
                        return String(coin[key]).toLowerCase().includes(query.toLowerCase())
                    })
                }
                ).map(coin=>(

                <tr key={coin.id}>
                    <td>{coin.rank}</td>
                    <td><img src={coin.icon} alt={coin.name} /></td>
                    <td>{coin.name}</td>
                    <td>{coin.price}</td>
                </tr>

            ))
            :null
        }
                        
                    </tbody>
                </table>
            </div>
        </>
     );
}

export default Table;