import React from 'react'

const Images = () => {
  return (
    <div className='row'>
      <table>
        <tbody>
          <tr>
            <td>
              <div className='imgpicture'>
                <img src="https://i.imgur.com/zuzHa5h.jpeg" alt='PA Flag'></img>
                <h4 className="imgcontainer">Flag of Pennsylvania</h4>
                <h4 className="imgcontainer">(Courtesy of Britannica)</h4>

              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h1> </h1>
            </td>
            <td>
              <div className='imgpicture1'>
                  <img src="https://i.imgur.com/ksN9Ffe.jpg" alt='Downtown Allentown'></img>
                  <h4 className="imgcontainer">Downtown Allentown</h4>
                  <h4 className='imgcontainer'> (Courtesy of Lehigh Valley)</h4>
              </div>
            </td>  
          </tr>
          <tr>
              <td style={{height: '50px'}}>
                <div className='imgpicture2'>
                    <img src="https://i.imgur.com/kjOCJcp.jpg" alt='Bethlehem Steel'></img>
                <h4 className="imgcontainer">Bethlehem Steel</h4>
                <h4 className="imgcontainer">(Courtesy of the Steelstacks)</h4>
                </div>
              </td>
          </tr> 
        </tbody>
      </table>   
    </div>
  )
}

export default Images