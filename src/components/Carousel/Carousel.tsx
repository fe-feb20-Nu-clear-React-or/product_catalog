import { Card } from "../Card/Card";
import './Carousel.scss';

export const Carousel = () => {
    return (    
        <section className='carousel'>
            <article className="carousel__header">
            <h2 className="carousel__title">Brand new <br></br>models</h2>
            <div className="carousel__switch-buttons">
                <button className="carousel__switch-button">
                    {'<'}
                </button>
                <button className="carousel__switch-button">
                    {'>'}
                </button>
            </div>
            </article>
        
            <article className="carousel__card-list">
                <Card />
                <Card />
            </article>
        </section>
   )
}