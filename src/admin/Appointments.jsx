import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from "../custom-hooks/useGetData";

import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

const Appointments = () => {
    const { data: userData, loading } = useGetData('appointment');

    const deleteUser = async(id) =>{
        await deleteDoc (doc(db,'appointments' , id))
        toast.success("user Deleted")
    }
  
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h4 className='fw-bold'>Appointments</h4>
                    </Col>
                    <Col lg='12' className='pt-5'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                     <th>Contact Number</th>
                                    <th>Action</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    
                                        <h5 className='pt-5 fw-bold'>Loading...</h5>
                                   
                                ) : (
                                    userData.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.displayName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.contact}</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={()=>{
                                                    deleteUser(user.uid);
                                                }}
                                                >
                                                    Delete</button>
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

export default Appointments;