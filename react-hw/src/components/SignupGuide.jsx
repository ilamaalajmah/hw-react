function SignupGuide() {
    return (
      <section className="mt-5 bg-gray-100 pb-5">
      <h1 className="pb-5 text-center py-4" 
    style={{ 
      color: 'rgb(78, 55, 151)', 
      fontSize: '2.3rem',  
      fontWeight: '900',   
    }}>
  خطوات التسجيل
</h1>
        <div className="container">
          <div className="row text-center">
            <div className="col-sm d-flex flex-column align-items-center">
              <div className="d-flex align-items-center justify-content-center bg-secondary rounded-circle" 
                   style={{ width: '80px', height: '80px', backgroundColor: '#91d4d8'  }}>
                <img src="https://tuwaiq.edu.sa/img/course-step-1.svg" alt="step 1 icon" />
              </div>
              <p className="mt-3 text-xl">انتظار رسالة القــــبــــــــــــول</p>
            </div>
            <div className="col-sm d-none d-sm-flex align-items-center justify-content-center">
              <img src="https://tuwaiq.edu.sa/img/horizontal_line.svg" alt="" />
            </div>
            <div className="col-sm d-flex flex-column align-items-center">
              <div className="d-flex align-items-center justify-content-center bg-secondary rounded-circle" 
                   style={{ width: '80px', height: '80px', backgroundColor: '#91d4d8' }}>
                <img src="https://tuwaiq.edu.sa/img/course-step-2.svg" alt="step 2 icon" />
              </div>
              <p className="mt-3 text-xl">التــســــــــجيــــــــــــل في المعسكر أو البرنامج</p>
            </div>
            <div className="col-sm d-none d-sm-flex align-items-center justify-content-center">
              <img src="https://tuwaiq.edu.sa/img/horizontal_line.svg" alt="" />
            </div>
            <div className="col-sm d-flex flex-column align-items-center">
              <div className="d-flex align-items-center justify-content-center bg-secondary rounded-circle" 
                   style={{ width: '80px', height: '80px', backgroundColor: '#91d4d8' }}>
                <img src="https://tuwaiq.edu.sa/img/course-step-3.svg" alt="step 3 icon" />
              </div>
              <p className="mt-3 text-xl">الإنضمام إلى المنصة</p>
            </div>
          </div>
        </div>
      </section>
    );
}
  export default SignupGuide;


