import CategoryFilter from './CategoryFilter/CategoryFilter';
import ItemsAll from './ItemsAll/ItemsAll';

const ShopLayout = () => {
     return (
          <section className="shop pt-25vh">
               <div className="container-fluid">
                    <div className="row no-gutters">
                         <div className="col-12 col-md-3">
                              <CategoryFilter/>
                         </div>
                         <div className="col-12 col-md-9">
                              <ItemsAll/>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default ShopLayout;