import './form.css'
import Navbar from '../navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom';

function Form(props) {
    const { addMobileListData, setAddMobileListData, isMobileEdit, setIsMobileEdit, brandname, setBrandName, mobilename, setMobileName, mobilequantity, setMobileQuantity, mobileprice, setMobilePrice, curentMobileListId } = props;
    const navigate = useNavigate();

    const handleBrandName = (event) => {
        setBrandName(event.target.value);
    };

    const handleMobileName = (event) => {
        setMobileName(event.target.value);
    };

    const handleMobileQuantity = (event) => {
        setMobileQuantity(event.target.value);
    };

    const handleMobilePrice = (event) => {
        setMobilePrice(event.target.value);
    };

    const handleAddMobileList = (event) => {
        event.preventDefault();

        if (brandname.trim() !== "" && mobilename.trim() !== "" && mobilequantity.trim() !== "" && mobileprice.trim() !== "") {
            setAddMobileListData([...addMobileListData, { id: Date.now(), name: brandname, mobiletittle: mobilename, mobilequantity: mobilequantity, mobileprice: mobileprice }]);
            alert("Successfully Added List");
            setBrandName('');
            setMobileName('');
            setMobileQuantity('');
            setMobilePrice('');
            navigate('/mobile');
        }
        else {
            alert("Please Enter All Input Data");
        }
    }

    const handleUpdateFormSubmit = (event) => {
        event.preventDefault();

        if (brandname.trim() !== "" && mobilename.trim() !== "" && mobilequantity.trim() !== "" && mobileprice.trim() !== "") {
            const updatedMobileList = addMobileListData.map((item) =>
                item.id === curentMobileListId ? { ...item, name: brandname, mobiletittle: mobilename, mobilequantity: mobilequantity, mobileprice: mobileprice } : item);
            setAddMobileListData(updatedMobileList);
            setIsMobileEdit(false);
            setBrandName('');
            setMobileName('');
            setMobileQuantity('');
            setMobilePrice('');
            navigate('/mobile');
        }
        else {
            alert("Please Enter All Input Data");
        }
    }

    const handleMobileListCancel = () => {
        setIsMobileEdit(false);
        setBrandName('');
        setMobileName('');
        setMobileQuantity('');
        setMobilePrice('');
    }

    return (
        <div className='container'>
            <div className="form_background">
                <Navbar />
                <form onSubmit={handleAddMobileList}>

                    <div className='form_item_container'>
                        <div>
                            <label htmlFor="brand">Brand Name</label>
                            <input type="text" name='brand' value={brandname} onChange={handleBrandName} />
                        </div>
                        <div>
                            <label htmlFor="book">Mobile Name</label>
                            <input type="text" name='book' value={mobilename} onChange={handleMobileName} />
                        </div>
                        <div>
                            <label htmlFor="">Quantity</label>
                            <input type="number" name="quantity" value={mobilequantity} onChange={handleMobileQuantity} />
                        </div>
                        <div>
                            <label htmlFor="">Price</label>
                            <input type="number" name='price' value={mobileprice} onChange={handleMobilePrice} />
                        </div>
                        <div className='SubmitButtonContainer'>
                            {isMobileEdit ? (
                                <div className='SubmitButtonContainer'>
                                    <button type='submit' onClick={handleUpdateFormSubmit}>Update</button>
                                    <button onClick={handleMobileListCancel}>Cancel</button>
                                </div>
                            ) : (<button type='submit'>Submit</button>)
                            }
                        </div>
                    </div>

                </form>

                <div className="home_page_container">

                    <Link to="/">
                        <button>Go To Home Page</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Form