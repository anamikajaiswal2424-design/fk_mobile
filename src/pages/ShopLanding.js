import './ShopLanding.css';

const landingCategories = [{ name: 'Kitchen', image: process.env.PUBLIC_URL + '/kitchen_category.jpg' }];

function ShopLanding({ onEnter }) {
  return (
    <main className="shop-landing">
      <section className="shop-landing__content">
        <button className="shop-landing__grid" type="button" onClick={onEnter} aria-label="Enter shop">
          {landingCategories.map((category) => (
            <div className="shop-landing__card" key={category.name}>
              <img src={category.image} alt={category.name} />
              <div className="shop-landing__shade" />
              <span>{category.name}</span>
            </div>
          ))}
        </button>

        <button className="shop-landing__enter" type="button" onClick={onEnter}>
          <span>ENTER SHOP</span>
          <span aria-hidden="true">&#8594;</span>
        </button>
      </section>
    </main>
  );
}


export default ShopLanding;
