import React from 'react'

export default function Event() {
  return (
    <div>
  <div className="events_section layout_padding margin_90">
    <div className="container">
      <h1 className="events_taital">Events</h1>
      <p className="events_text">It is a long established fact that a reader will be distracted by the readable c</p>
      <div className="events_section_2">
        <div className="row">
          <div className="col-md-6">
            <div className="images_main">
              <img src="images/img-7.png" className="image_7" />
            </div>
            <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
            <div className="time_section">
              <div className="live_text">Live event</div>
              <div className="date_text">04 Nov 2023</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="images_main">
              <img src="images/img-8.png" className="image_7" />
            </div>
            <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
            <div className="time_section">
              <div className="live_text">Live event</div>
              <div className="date_text">04 Nov 2023</div>
            </div>
          </div>
        </div>
        <div className="read_bt"><a href="#">Read More</a></div>
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
