import React ,{useState} from 'react';
import { Container, Row, Col, Form } from 'reactstrap';
import "../styles/add-design.css";
import { toast } from "react-toastify";
import { db, storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
import useGetData from '../custom-hooks/useGetData';

const AddDesigns = () => {

  const {data: designData} = useGetData('Designs')
  console.log(designData)

const [enterTitle, setEnterTitle] = useState('');
const [enterShortDesc, setEnterShortDesc] = useState('');
const [enterDescription, setEnterDescription] = useState('');
const [enterDesignImg, setEnterDesignImg] = useState('null');
const [loading, setLoading] = useState(false)


const addDesigns= async(e)=>{
  e.preventDefault();
  setLoading(true)

  // const designs={ 
  //   title:enterTitle,
  //   shortDesc:enterShortDesc,
  //   description:enterDescription,
  //   imgUrl:enterDesignImg

  // };

   // adding design to the firebase

  try{
    const docRef =await collection(db, 'designs')
    const storageRef = ref(storage, `designImages/${Date.now()}_${enterDesignImg.name}`); 
    const uploadTask = uploadBytesResumable(storageRef, enterDesignImg)

    uploadTask.on(()=>{
      toast.error('images not uploaded')
    }, 
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then(async(downLoadURL)=>{
        await addDoc(docRef,{
          title:enterTitle,
          shortDesc:enterShortDesc,
          description:enterDescription,
          imgUrl:downLoadURL
        } );
      });
      
    }
    );
    
    toast.success('design successfully added!');
    Navigate("/dashboard/all-designs");

  }catch(error){
    setLoading(false)
    toast.error("product not added!");

  }
 

  

 
  
  // console.log(designs);
 
}
  return (
    <section>
      <Container>
        <Row>
          <Col  lg='12'>
            <h4 className='align-items-center ' >Add Designs</h4>
            <Form onSubmit={addDesigns}>

             
              <div className="form_group ">
              <h6>Title  </h6>
              <input 
                type="text"
                className="design_form-control"
                placeholder="Title.." value={enterTitle} 
                onChange={e=> setEnterTitle(e.target.value)}
                required
              />
            </div>

            <div className="form_group ">
              <h6>Short Description  </h6>
              <input 
                type="text"
                className="design_form-control"
                placeholder="Lorem..." value={enterShortDesc} 
                onChange={e=> setEnterShortDesc(e.target.value)}
                required
              />
            </div>
                
            <div className="form_group ">
              <h6>Description  </h6>
              <input 
                type="text"
                className="design_form-control"
                placeholder="description...."
                value={enterDescription} 
                onChange={e=> setEnterDescription(e.target.value)}
                required
              />
            </div>

                
              
             

            <div className="form_group ">
              <h6>Designs  </h6>
              <input className="design_form-control"
                type="file" onChange={e=>setEnterDesignImg(e.target.files[0])}
                
               
                required
              />
            </div>

            <button className='designbtn' type= "submit" >Add designs</button>

            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddDesigns