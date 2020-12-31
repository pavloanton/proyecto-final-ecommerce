import { useState, useContext } from 'react'
import './itemcount.components.styles.css'
import { CartContext } from '../../context/CartProvider'

const ItemCount = ({ idProduct, nameProduct, imageProduct, priceProduct, initial, min, max }) => {
    
    const [countInitial, setCountInitial] = useState(initial)
    const [message, setMessage] = useState('')
    const { addListShop } = useContext(CartContext)

    const handleClick = (action) => { 
        if (action === true) {
            if (countInitial < max) {
                setCountInitial(countInitial + 1)
                return
            }
            setMessage("You cannot carry more products")
            return
        }

        if (action === false) {
            if (countInitial > min) {
                setCountInitial(countInitial - 1)
                return
            }
            setMessage("You cannot carry less products")
            return
        }
    }

    const onAdd = () => { 
        setMessage('Items added to cart.')
        addListShop(idProduct, nameProduct, imageProduct, priceProduct, countInitial)
    }

    return (
        <div className="box_countItem">
            <div className="row no-gutters">
                <div className="col-3">
                    <button className="btn btn-secondary" onClick={() => handleClick(false)}>
                        -
                    </button>
                </div>
                <div className="col-6">
                    <input 
                        type="text"
                        className="form-control inputCount"
                        onChange={ e => setCountInitial(e.target.value) }
                        value={countInitial} />
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary" onClick={() => handleClick(true)}>
                        +
                    </button>
                </div>
                <div className="col-12 mt-3">
                    <button
                        type="button"
                        disabled={ countInitial === 0 ? ( 'disabled' ) : ( '' ) }
                        className={
                            countInitial > 0 ? 
                            ( 'btn btn-success' ) : ( 'btn btn-secondary disabled' )
                        }
                        onClick={ () => onAdd() }>
                        ADD TO CART
                    </button>
                    <div 
                        className=
                        {`alert alert-secondary fade mt-4 ${ message === "" ? 
                        ( 'hide' ) : ( 'show' ) }`} 
                        role="alert">
                        { message }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;