import React from 'react'

export default function Language() {
  return (
    <div>
  <div className="language_section layout_padding">
    <div className="container">
      <h1 className="language_taital">Start Now</h1>
      <h1 className="language_taital_1">Learn a new language </h1>
      <div className="language_section_2 layout_padding">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src="images/icon-1.png" /></div>
              <h6 className="heavy_text">An Easy <br />Study Approach</h6>
            </div>
            <div className="readmore_bt"><a href="#">Read More</a></div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main active">
              <div className="icon_1"><img src="images/icon-2.png" /></div>
              <h6 className="heavy_text">Free <br />Teaching Materials</h6>
            </div>
            <div className="readmore_bt active"><a href="#">Read More</a></div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src="images/icon-3.png" /></div>
              <h6 className="heavy_text">A Free <br />Mobile Application</h6>
            </div>
            <div className="readmore_bt"><a href="#">Read More</a></div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src="images/icon-4.png" /></div>
              <h6 className="heavy_text">An <br />Accredited School</h6>
            </div>
            <div className="readmore_bt"><a href="#">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="newsletter_section layout_padding">
      <h1 className="newsletter_taital">Subscribe Our Newsletter</h1>
      <div className="mail_main">
        <input type="text" className="email_text" placeholder="Enter Your email " name="Enter Your email " />
        <div className="left_arrow"><a href="#"><img src="images/left-arrow.png" /></a></div>
      </div>
    </div>
  </div>
</div>

  )
}
