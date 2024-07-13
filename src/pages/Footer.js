import React from 'react'

export default function Footer() {
  
  let senddata = ()=>
  {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;  

    let data = {
      "Name": name,
      "Email": email,
      "Phone": phone
    };
    
    fetch(`http://localhost:1337/api/enquiry-forms`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    }).then((res) => { return res.json() }).then((data) => {
      if (data.data.attributes.Email === email)
      {
      Swal.fire({
        title: "Good job!",
        text: "You have succesfully Registred",
        icon: "success"
      })
    }
    }).catch();
  }

  return (
      <>
          <div className="footer_section">
    <div className="container">
      <h1 className="touch_text">Get In Touch</h1>
      <div className="email_box">
            <div className="input_main">
             
          <form>
            <div className="form-group">
              <input type="text" id="name" className="email-bt" placeholder="Name" name="Name" />
            </div>
            <div className="form-group">
              <input type="text" id="phone" className="email-bt" placeholder="Phone" name="Phone" />
            </div>
            <div className="form-group">
              <input type="text" id="email" className="email-bt" placeholder="Email" name="Email" />
            </div>
            
          </form>
          <div className="send_bt"><button class="btn btn-warning" onClick={senddata}>SEND</button></div>
        </div>
      </div>
    
    </div>
  </div>
  <div className="copyright_section">
    <div className="container">
      <p className="copyright_text"> 2023 All Rights Reserved. Design by <a href="html.design">Free Html Templates</a></p>
    </div>
  </div>
    </>
  )
}
