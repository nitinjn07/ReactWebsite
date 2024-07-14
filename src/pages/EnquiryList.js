import React, { useEffect,useState } from 'react'

export default function EnquiryList() {
   
    // hook - useEffect()
    
    const [enquries, setEnquires] = useState([]);
   
    useEffect(() => {
     
        fetch(`http://localhost:1337/api/enquiry-forms`)
            .then((res) => { 
                return res.json(); // Response Json Readble
            })
            .then((list) => {
                console.log(list);

            let eqlist = list.data.map((cv,idx,arr) => {
                     
                    return{
                          id: cv.id,
                        name:cv.attributes.Name,
                        email:cv.attributes.Email,                        
                        phone:cv.attributes.Phone
                    }
                });
                
                setEnquires(eqlist);

            })
            .catch();

     }, []);


  return (
     
      <>
          <div className='row'>
              <div className='col-md-8 mx-auto my-5'>
          <table className="table table-bordered my-5">
              <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                          <th>Phone</th>
                          <th>Action</th>
                      </tr>
                      {
                          enquries.map((cv,idx,arr)=>{ 
                          return <tr>
                              <td>{cv.id}</td>
                              <td>{cv.name}</td>
                              <td>{cv.email}</td>
                              <td>{cv.phone}</td>
                              <td>
                                  <button className="btn btn-success">Update</button>
                                  <button className="btn btn-danger">Delete</button>
                              </td>
                          </tr>
                        })}
              </table>
              </div>
              </div>
      </>
  )
}
