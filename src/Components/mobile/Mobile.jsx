import React from 'react'
import './mobile.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Mobile(props) {
  const {addMobileListData, onDeleteMobileList, setIsMobileEdit, setCurentMobileListId, setBrandName, setMobileName, setMobileQuantity, setMobilePrice} = props;
  const navigate = useNavigate();

  const handleEditClick = (id, name, mobiletittle, mobilequantity, mobileprice) =>{
    setIsMobileEdit(true);
    setCurentMobileListId(id);
    setBrandName(name);
    setMobileName(mobiletittle);
    setMobileQuantity(mobilequantity);
    setMobilePrice(mobileprice);
    navigate('/form');
  }

  return (
    <div className='mobile_container'>
        <div className="mobile_background">
            <h1>COLLECTON OF MOBILES</h1>
            <div className="mobile_list_item_container">
             <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Brand Name</th>
                    <th>Mobile Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    addMobileListData.map((item,index)=>{
                      return(
                        <tr key={item.id}>
                          <td>{index+1}</td>
                          <td>{item.name}</td>
                          <td>{item.mobiletittle}</td>
                          <td>{item.mobilequantity}</td>
                          <td>{item.mobileprice}</td>
                          <td className='action_button_container'>
                            <button className='action_edit_button' onClick={() => handleEditClick(item.id, item.name, item.mobiletittle, item.mobilequantity, item.mobileprice)}>Edit</button>
                            <button className='action_delete_button' onClick={() => onDeleteMobileList(index)}>Delete</button>
                          </td>
                       </tr>
                      )
                    })
                  }  
                </tbody>
             </table>
            </div>
            <p className='mobile_button_container'>

                <Link to="/">
                 <button className='home_page_button'>GO TO HOME PAGE</button>
                </Link>

            </p>
        </div>
    </div>
  )
}

export default Mobile;