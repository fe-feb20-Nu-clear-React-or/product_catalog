/* eslint-disable max-len */
import categoryImagePhones from '../../photos/category-image-phones-320.jpg';
import categoryImageTablets from '../../photos/category-image-tablets-320.jpg';
import categoryImageAccessories from '../../photos/category-image-accessories-320.jpg';
import './Category.scss';

export const Category = () => {
  return (
    <section className="category">
      <article className="category__header">
        <h2 className="category__header-title">Shop by category</h2>
      </article>
      <div className='category__item-wrapper'>
        <article className="category__item">
          <div className="category__item-image-container">
            <img
              className="category__item-image"
              src={categoryImagePhones}
              alt="phones category"
            />
          </div>
          <h3 className="category__item-title">Mobile phones</h3>
          <p className="category__model-amount">95 models</p>
        </article>

        <article className="category__item">
          <div className="category__item-image-container">
            <img
              className="category__item-image"
              src={categoryImageTablets}
              alt="phones category"
            />
          </div>
          <h3 className="category__item-title">Tablets</h3>
          <p className="category__model-amount">24 models</p>
        </article>

        <article className="category__item">
          <div className="category__item-image-container">
            <img
              className="category__item-image"
              src={categoryImageAccessories}
              alt="phones category"
            />
          </div>
          <h3 className="category__item-title">Accessories</h3>
          <p className="category__model-amount">100 models</p>
        </article>
      </div>


    </section>
  );
};

