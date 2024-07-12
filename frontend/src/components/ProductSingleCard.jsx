/* eslint-disable react/prop-types */

const ProductSingleCard = ({ product }) => {
  const {
    image = "",
    name = "Product Name",
    description = "No description available.",
    priceInCents = 0,
  } = product;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] object-cover object-top"
        />
      </figure>

      <div className="card-body bg-base-200">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="price">${(priceInCents / 100).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductSingleCard;
