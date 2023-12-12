import './ProductDetails.css'
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  // console.log(params.productId);
  // console.log(params)

  const details = {
    p1: {
      title: "A Book",
      description:"this book could have been encapsulating, educational, nail-biting, page-turner, mystical and so on.",
      image: ['/images/book/book1.jpeg', '/images/book/book2.jpeg', '/images/book/book3.jpeg', '/images/book/book4.jpeg'],
      reviews: [
        {name: 'Rahul', feedback: 'this is awesome product', Rating: '5'},
        {name: 'Nitin', feedback: 'this is average product, not much nice but it is worthy', Rating: '3.7'},
        {name: 'disha', feedback: 'this is a very good quality product', Rating: '4.1'},
      ]
    },
    p2: {
      title: "A Carpet",
      description:"A carpet is a textile floor covering typically consisting of an upper layer of pile attached to a backing. The pile was traditionally made from wool, but since the 20th century synthetic fibers such as polypropylene, nylon, or polyester have often been used, as these fibers are less expensive than wool.",
      image: ['/images/carpet/carpet1.jpeg', '/images/carpet/carpet2.jpeg', '/images/carpet/carpet3.jpeg', '/images/carpet/carpet4.jpeg'],    
      reviews: [
        {name: 'Rahul', feedback: 'this is bad product', Rating: '2.8'},
        {name: 'Nitin', feedback: 'this is average product, not much nice but it is worthy', Rating: '3.4'},
        {name: 'disha', feedback: 'this is a low quality product', Rating: '2.7'},
      ]
    },
    p3: {
      title: "An Online Course",
      description:"there are courses on engineering, computer programming, baking, and dog training, just to name a few.",
      image: ['/images/course/course1.jpeg', '/images/course/course2.jpeg', '/images/course/course3.jpeg', '/images/course/course4.png'],   
      reviews: [
        {name: 'Rahul', feedback: 'Awesome product', Rating: '4.7'},
        {name: 'Nitin', feedback: 'this is good product, it is worthy', Rating: '4.4'},
        {name: 'disha', feedback: 'this is a quite fu**ing good quality product', Rating: '5'},
      ]
    },
  };

  const p = details[params.productId]

  return (
    <section>
      {/* <h1>Product Detail</h1>
      <p>{params.productId}</p> */}
      <div>
        <h2>{p.title}</h2>
        {p.image.map((img) => (
          <img src={img} />
        ))}
        <p>{p.description}</p>

        <div className="reviews">
          {p.reviews.map((review) => (
            <div className="review-container">
              <p><h3>{review.name}</h3></p>
              <p><h3>{review.feedback}</h3></p>
              <p>Rating: <h3>{review.Rating}</h3></p>
            </div>
          ))}
        </div>
        <button>Add to Cart</button>
      </div>
    </section>
  );
};

export default ProductDetail;
