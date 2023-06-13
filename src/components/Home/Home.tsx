import  './Home.scss'
import { Carousel } from '../Carousel/Carousel'
import { Header } from '../Header/Header'
import { Category } from '../Category/Category'

export const Home = () => {
    return (
        <main className="home">
            <Header />
            <Carousel />
            <Category />
            <Carousel />
        </main>
    )
}