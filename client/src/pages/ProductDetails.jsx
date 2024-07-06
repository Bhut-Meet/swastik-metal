
export const ProductDetails = ( product, onClose ) => {
  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img src={product.image} className="img-fluid mb-3" alt={product.title} />
            <p>{product.description}</p>
            <p className="font-weight-bold">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

