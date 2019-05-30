import React from 'react';

const Main = props => {
    return (
        <main role="main" className="probootstrap-main js-probootstrap-main">
        <div className="probootstrap-bar">
          <a href="#" className="probootstrap-toggle js-probootstrap-toggle"><span className="oi oi-menu" /></a>
          <div className="probootstrap-main-site-logo"><a href="index.html">Aside</a></div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              <div className="row">
                <div className="col-xl-8 col-lg-12 mx-auto">
                  <h1 className="mb-3">Додати клієнта</h1>
                  <form action="#" method="post" className="probootstrap-form mb-5">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="fname">Ім'я</label>
                          <input type="text" className="form-control" id="fname" name="fname" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="lname">Фамілія</label>
                          <input type="text" className="form-control" id="lname" name="lname" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Номер телефону</label>
                      <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <h2>Деталі замовлення</h2>
                    <div className="form-group">
                    <label htmlFor="brand">Бренд</label>
                    <input className="form-control" id="brand" name="brand" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="model">Модель</label>
                    <input className="form-control" id="model" name="model" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="imei">Imei</label>
                    <input className="form-control" id="imei" id="imei" name="imei" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="description">Опис проблеми</label>
                      <textarea cols={25} rows={5} className="form-control" id="description" name="description" defaultValue={""} />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="wishes">Додаткові побажання</label>
                      <textarea cols={15} rows={5} className="form-control" id="wishes" name="wishes" defaultValue={""} />
                    </div>
                    
                    <div className="form-group">
                      <div><label htmlFor="date">Введіть дату</label></div>
                      <input type="date" className="form-control" id="date" name="repairStart" />
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary" id="submit" name="submit" defaultValue="Send Message" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* END row */}
        </div>
        {/* END section */}
      </main>
    )
}

export default Main;