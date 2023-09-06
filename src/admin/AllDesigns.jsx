import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';
import useGetData from '../custom-hooks/useGetData';
import { toast } from 'react-toastify';

const AllDesigns = () => {
  const { data: designData, loading } = useGetData('designs');
  

  const deleteDesign = async (id) => {
    await deleteDoc(doc(db, 'designs', id));
    toast.success('Deleted!');
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h4 className='fw-bold mt-4 mb-4'>All Designs</h4>
          </Col>
          <Col lg='12' className='pt-2'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan='3' className='py-5 text-center fw-bold'>
                      Loading...
                    </td>
                  </tr>
                ) : (
                  designData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.imgUrl}
                          alt=''
                          className='img-fluid' // Add this class for responsive image size
                          style={{ width: '20%', height: '20%' }} // Adjust image size here
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>
                        <button
                          onClick={() => {
                            deleteDesign(item.id);
                          }}
                          className='btn btn-danger' // Use Bootstrap class for a styled button
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllDesigns;