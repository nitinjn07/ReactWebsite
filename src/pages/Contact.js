import React from 'react'

export default function Contact() {
 
  let subscribe = () => {
    
    let email = document.getElementById("email").value;  

    let data = {    
      "Email": email
    };
    
    fetch(`http://localhost:1337/api/subscriptions`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    }).then((res) => { return res.json() }).then((data) => {
      if (data.data.attributes.Email === email) {
        Swal.fire({
          title: "Good job!",
          text: "Thank you for subscribing us",
          icon: "success"
        })}}).catch();
  }

  return (
    <div className="container">
  <div className="newsletter_section layout_padding">
    <h1 className="newsletter_taital">Subscribe Our Newsletter</h1>
    <div className="mail_main">
      <input type="email" id="email" className="email_text" placeholder="Enter Your email " name="Enter Your email " />
      <div className="left_arrow"><a href="#" onClick={subscribe}><img src="images/left-arrow.png" /></a></div>
    </div>
  </div>s
</div>

  )
}
