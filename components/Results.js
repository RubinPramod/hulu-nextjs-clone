import Thumbnail from "./Thumbnail";

function Results({result}) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {result.results.map((res)=>(
            <Thumbnail key={res.id} results={res}/>
        ))}
        </div>
        
    )
}

export default Results
