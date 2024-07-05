import { IoMdSearch } from 'react-icons/io';

export const ProductPage = () => {
  return (
    <div className='mx-3'>
      <div className=' my-4 container-fluid'>
        <div className='row justify-content-center'>
          <div
            className='col-md-6 col-sm-8 col-lg-4 p-2 rounded-5'
            style={{
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
              backgroundColor: '#fdfdff',
            }}
          >
            <div className='d-flex align-items-center'>
              <IoMdSearch size={20} /> 
              <input
                type='text'
                placeholder='Search'
                style={{
                  marginLeft:"5px",
                  border: 'none',
                  outline: 'none',
                  backgroundColor: '#fdfdff',
                  width: '100%',
                  fontSize: '1rem',   
                }}
              />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};
