import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom mt-4'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on our socials:</span>
        </div>

        <div>
          <a href='https://x.com/nesh_kibet' className='me-4 text-reset' target="_blank">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.linkedin.com/in/kibetse' className='me-4 text-reset' target="_blank">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/NesBet/Hubbis-Shop' className='me-4 text-reset' target="_blank">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-4'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-2' style={{ color: 'white' }}>
                <MDBIcon icon="gem" className="me-3" style={{color:'white'}}/>
                About Us:
              </h6>
              <p>
                We offer and deliver quality electronics to our customers. The Customer is always right!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-2' style={{ color: 'white' }}>Our Specialities:</h6>
              <p>
                  TELEVISIONS
              </p>
              <p>
                  SMARTPHONES
              </p>
              <p>
                  LAPTOPS
              </p>
              <p>
                  ACCESSORIES
              </p>
            </MDBCol>

            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto'>
              <h6 className='text-uppercase fw-bold mb-3' style={{ color: 'white' }}>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home Page
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white' }}>Store info: </h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Nairobi, Kenya
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@hubbisshop.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +254780237794
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        © 2024 Copyright: 
        <a className='text-reset fw-bold p-2' href='/'>
           Hubbis Shop
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer