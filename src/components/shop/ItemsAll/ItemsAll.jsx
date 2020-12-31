import { useEffect, useContext } from 'react';
import { ItemsContext } from '../../../context/ItemsProvider';
import './itemsall.components.styles.css';

const ItemsAll = () => {

     const { getItems, items } = useContext(ItemsContext)
     useEffect(() => { getItems() },[])

     console.log(items);
     
     return (
          <div className="row no-gutters animate__animated animate__slideInUp animate__delay-1s">
               { 
               items.map(item => (
               <div className="col-12 col-sm-4 mb-5" key={ item.id }>
                    <div className="product-card w-90">
                         { item.sale ? (<div className="badge">Sale</div>) : null }
                         <div className="product-tumb">
                              <img 
                                   src={item.image}
                                   alt={item.name}
                                   className="img-fluid"
                              />
                         </div>
                         <div className="product-details">
                              <span className="product-catagory">{item.category}</span>
                              <h5 className="item-title">{item.name}</h5>
                              <div className="product-bottom-details">
                                   <div className="product-price">
                                        { item.sale ? 
                                        ( <small>${item.priceOld} USD</small> ) : null }
                                        ${item.priceNow} USD
                                   </div>
                              </div>
                              <div className="product-bottom-details">
                                   <a   href={"/producto/"+item.id} 
                                        className="btn btn-success btnDetalle" 
                                        role="button" 
                                        aria-pressed="true">
                                        View Detail
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
               ))
               }
          </div>
     )
}

export default ItemsAll;