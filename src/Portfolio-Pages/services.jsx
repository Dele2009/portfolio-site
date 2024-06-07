import React from 'react'
import { services, pricing } from '../webvalues.json'
import imgA from '../port-img/a.svg'
import imgB from '../port-img/b.svg'

function Services() {
   // const services = values.services;
   return (
      <>
         <div className="py-5 mt-5">
            <div className="container text-secondary text-decoration-through">
               <div className="row g-4">

                  {
                     services.map((
                        {
                           title,
                           description,
                           linkText,
                           imgSrc,
                           imgAlt
                        }, index) => {
                        return (
                           <div className="col-lg-4 " key={index}>
                              <div className=" rounded-3 shadow px-4 py-5 bg-drop">
                                 <div className="mb-4">
                                    <h3 className="h5 fw-bold trans-back">{title}</h3>
                                    <p className="mb-3 home-text">
                                       {description}
                                    </p>
                                    {/* <a href="#" className="fw-medium text-primary">Know more</a> */}
                                 </div>
                                 <img 
                                    src={imgSrc}
                                    className="img-fluid ms-auto d-block" alt="illustration" loading="lazy" width="900" height="600"
                                    style={{ height: '200px' }} 
                                 />
                              </div>
                           </div>
                        )

                     })

                  }



               </div>
            </div>
         </div>





         <div className="row g-4 py-5 mt-5">
            <div className="col-11 m-auto">
               <div className="text-center mx-auto mb-5" style={{maxwidth: '510px'}}>
                  {/* <span className="fw-semibold text-primary mb-2 d-block">
                     Pricing Table
                  </span> */}
                  <h2 className="fw-bold display-5 trans-back mb-4 m-auto">
                     Pricing Plan
                  </h2>
                  {/* <p className="text-body">
                     There are many variations of passages of Lorem Ipsum available
                     but the majority have suffered alteration in some form.
                  </p> */}
               </div>
               <div className="row justify-content-center g-4">
                  {
                     pricing.map(({
                        planName,
                        price,
                        period,
                        description,
                        features,
                        buttonText
                     }, index) => {
                        return (
                           <div className="col-md-6 col-lg-4" key={index}>
                              <div
                                 className="bg-drop rounded-3 position-relative zindex-10 overflow-hidden shadow py-4 px-5">
                                 <span className="trans-back fw-semibold d-block mb-3">
                                    {planName}
                                 </span>
                                 <h2 className="fw-bold home-text mb-4" style={{ fontSize: '42px' }}>
                                    {price}
                                    <span className="home-text fs-4 fw-medium">
                                       / project
                                    </span>
                                 </h2>
                                 <p className="home-text pb-3 mb-4 border-bottom" style={{ borderColor: '#F2F2F2', fontSize: '14px' }}>
                                    {description}
                                 </p>
                                 <div className="mb-4">
                                    {
                                       features.map((feature, index) => {

                                         return <p className={ feature.isInclude ? 'home-text mb-3' : 'text-secondary text-decoration-line-through mb-3'} key={index}>
                                             {feature.name}
                                          </p>
                                       })
                                    }

                                 </div>
                                 {/* <a href="#" className="btn btn-outline-primary w-100 fw-semibold">
                                    {buttonText}
                                 </a> */}
                                 <div className="position-absolute top-0 end-0 zindex-n1">
                                    <img src={imgA} alt='ccccc' />
                                 </div>
                                 <div className="position-absolute top-0 end-0 zindex-n1">
                                    <img src={imgB} alt='ccccc' />
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </>
   )
}

export default Services;

