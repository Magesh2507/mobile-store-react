import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home/Home';
import Form from './Components/form/Form';
import Mobile from './Components/mobile/Mobile';
import { useState } from 'react';

function App() {
  const [addMobileList, setAddMobileList] = useState([]);
  const [isMobileEdit, setIsMobileEdit] = useState(false);
  const [curentMobileListId, setCurentMobileListId] = useState("");
  const [brandname, setBrandName] = useState("");
  const [mobilename, setMobileName] = useState("");
  const [mobilequantity, setMobileQuantity] = useState("");
  const [mobileprice, setMobilePrice] = useState("");

  const handleDeleteMobileList = (index) => {
    const newData = [...addMobileList];
    newData.splice(index, 1);
    setAddMobileList(newData);
  };

  return (
    <div>
         <Router>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='form' element = {
                <Form 
                  addMobileListData = {addMobileList} 
                  setAddMobileListData = {setAddMobileList} 
                  isMobileEdit = {isMobileEdit} 
                  setIsMobileEdit = {setIsMobileEdit} 
                  brandname = {brandname}
                  setBrandName = {setBrandName}
                  mobilename = {mobilename}
                  setMobileName = {setMobileName}
                  mobilequantity = {mobilequantity}
                  setMobileQuantity = {setMobileQuantity}
                  mobileprice = {mobileprice}
                  setMobilePrice = {setMobilePrice}
                  curentMobileListId = {curentMobileListId}
                />}/>

                <Route path='mobile' element = {
                <Mobile 
                  addMobileListData = {addMobileList} 
                  onDeleteMobileList = {handleDeleteMobileList}  
                  setIsMobileEdit = {setIsMobileEdit} 
                  setCurentMobileListId = {setCurentMobileListId}
                  setBrandName = {setBrandName}
                  setMobileName = {setMobileName}
                  setMobileQuantity = {setMobileQuantity}
                  setMobilePrice = {setMobilePrice}
                />}/>
            </Routes>
         </Router>
     </div>
  );
}

export default App;
