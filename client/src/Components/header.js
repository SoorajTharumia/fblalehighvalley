import "./header.css"

const Header = () => {
    return (
        <div>
            <h1 className='header' style={{ color: '#24498a', fontSize: '30px'}}>
                <em>Explore the Lehigh Valley!</em></h1>

            <h1 className='description' style={{color: 'black grey', fontSize: '17px', textAlign:'justify'}}>The Lehigh Valley is a metropolitan region located in eastern Pennsylvania and parts of northwest New Jersey. The Lehigh Valley 
            is seen as a  surburban region, with 3 cities, being Allentown, Bethlehem, and Easton. The area is located so there is easy access to many major cities of the United States, 
            including Philadelphia, New York City, Washington DC, etc. The region fosters a sense of community, and it is a great place for people of all ages to enjoy, so utilizing this Tourism
            asisstance website, you can find all the attractions in town that you need to see! So type one of the attributes and explore the Lehigh Valley! </h1>
        </div>
    )
}

export default Header
