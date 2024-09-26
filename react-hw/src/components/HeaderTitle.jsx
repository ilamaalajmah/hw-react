import "bootstrap/dist/css/bootstrap.min.css";

function HeaderTitle() {
  return (
    <div
      className="d-flex align-items-center justify-content-end w-100 py-4" 
      style={{ backgroundColor: "#4e3797", marginTop: '80px', color: 'white' }}
    >
      <h5 className="text-end mb-0" style={{ paddingRight: '30px' }}> 
        أكاديمية طويق
      </h5>
    </div>
  );
}

export default HeaderTitle;
