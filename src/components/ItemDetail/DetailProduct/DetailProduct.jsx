import ItemCount from '../../ItemCount/ItemCount';

const DetailProduct = ({ itemId }) => {

  console.log(itemId);
  return (
    <>
      <div className="col-12 col-md-8 p-5 animate__animated animate__slideInDown animate__delay-0.9s">
        <span className="product-catagory">{itemId.category}</span>
        <h4>{itemId.name}</h4>
        <p>{itemId.description}</p>
      </div>
      <div className="col-12 col-md-4 animate__animated animate__slideInLeft animate__delay-0.5s">
        <div className="product-card">
          {itemId.sale ? <div className="badge">Oferta</div> : null}
          <div className="product-tumb">
            <img src={itemId.image} alt={itemId.name} className="img-fluid" />
          </div>
          <div className="product-details">
            <div className="product-bottom-details">
              <div className="product-price">
                {itemId.sale ? <small>$ {itemId.priceOld} USD</small> : null}$ 
                {itemId.priceNow} USD
              </div>
            </div>
            <div className="product-bottom-details">
              <ItemCount
                idProduct={itemId.id}
                nameProduct={itemId.name}
                imageProduct={itemId.image}
                priceProduct={itemId.priceNow}
                initial={0}
                min={itemId.minItems}
                max={itemId.maxItems}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;