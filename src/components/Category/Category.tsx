/* eslint-disable max-len */
import categoryImagePhones from '../../photos/category-image-phones-320.png';
import categoryImageTablets from '../../photos/category-image-tablets-320.png';
import categoryImageAccessories from '../../photos/category-image-accessories-320.png';
import './Category.scss';

export const Category = () => {
  return (
    <section className="category">
      <article className="category__header">
        <h2 className="category__header-title">Shop by category</h2>

      </article>

      <article className="category__item">
        <div className="category__item-image-container category__item-image-container--phones">
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
        <div className="category__item-image-container category__item-image-container--tablets">
          <img
            className="category__item-item-image"
            src={categoryImageTablets}
            alt="phones category"
          />
        </div>
        <h3 className="category__item-title">Mobile phones</h3>
        <p className="category__model-amount">24 models</p>
      </article>

      <article className="category__item">
        <div className="category__item-image-container category__item-image-container--accessories">
          <img
            className="category__item-image"
            src={categoryImageAccessories}
            alt="phones category"
          />
        </div>
        <h3 className="category__item-title">Mobile phones</h3>
        <p className="category__model-amount">100 models</p>
      </article>

    </section>
  );
};

