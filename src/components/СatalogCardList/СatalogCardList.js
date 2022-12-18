import './СatalogCardList.css';
import Image from '../Image/Image';
function PortfolioCardList({ arrayPortfolio }) {


    return (
        <section className='portfolio-card'>
            <ul className='elements'>
                {arrayPortfolio.map((image, index) => {
                    return (
                        <Image key={index}
                            image={image}
                        />
                    );
                })
                }
            </ul>

        </section>
    );
};

export default PortfolioCardList;