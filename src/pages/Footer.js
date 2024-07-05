import React from 'react'

export default function Footer() {
  return (
      <>
          <div className="footer_section">
    <div className="container">
      <h1 className="touch_text">Get In Touch</h1>
      <div className="email_box">
        <div className="input_main">
          <form action="/action_page.php">
            <div className="form-group">
              <input type="text" className="email-bt" placeholder="Name" name="Name" />
            </div>
            <div className="form-group">
              <input type="text" className="email-bt" placeholder="Phone" name="Phone" />
            </div>
            <div className="form-group">
              <input type="text" className="email-bt" placeholder="Email" name="Email" />
            </div>
            <div className="form-group">
              <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="Massage" defaultValue={""} />
            </div>
          </form>
          <div className="send_bt"><a href="#">SEND</a></div>
        </div>
      </div>
      <div className="call_main">
        <div className="call_text"><img src="images/call-icon.png" /><span className="padding_left_15">Call Now  +01 123467890</span></div>
        <div className="call_text"><img src="images/mail-icon.png" /><span className="padding_left_15">demo@gmail.com</span></div>
      </div>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src="images/fb-icon.png" /></a></li>
          <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
          <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
          <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
        </ul>
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
