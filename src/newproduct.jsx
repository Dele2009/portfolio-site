import './App.css'
function New(props) {


  return (
    <>
      <div className="card">
        <div className='card-img'>
          <img src={props.image} />
        </div>
        <div className='card-text'>
          <p>
            <strong>Dog breed:</strong> {props.breed}
          </p>
          <p>
            <strong>Price:</strong> {props.price}
          </p>
          <p>
            <strong>avaliable</strong> {props.yesh?'yes':'no'}
          </p>

        </div>
        <div className="btn-div">
          <button>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default New