import React from 'react'
import Header from '../Header/Header'
import './Shop.css'

export default function Shop() {
  return (
    <>
      <Header />
      <center>
        
        <fieldset className='shop-fieldset'>
          <h1 className='shops'>Shops Network</h1>
          <table className='shops-table'>
            <tr>
              <td><center>Galle Fort</center></td>
              <td><center>Matara</center></td>
            </tr>

            <tr>
              <td><center>Matara Fort</center></td>
              <td><center>HCM</center></td>
            </tr>

            <tr>
              <td><center>OGF</center></td>
              <td><center>Marine Drive, Dehiwala</center></td>
            </tr>

            <tr>
              <td><center>Mt. Lavinia</center></td>
              <td><center>Ella</center></td>
            </tr>
          </table>
        </fieldset>
      </center>

    </>
  )
}
