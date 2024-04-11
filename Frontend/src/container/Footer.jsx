import React from "react";

const Footer = () => {
  const style = `.pp15{
        display: flex;
padding: 64px 165px;
align-items: flex-start;


    }
    
    .ff16{color: #FFF;
        font-family: DM Sans;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 80% */}
        .ff17{color: var(--neutral-silver, #F5F7FA);
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px; /* 142.857% */}
            .ff18{color: var(--neutral-white, #FFF);

                /* Heading/Headline 4 */
                font-family: Inter;
                font-size: 20px;
                font-style: normal;
                font-weight: 600;
                line-height: 28px; /* 140% */}
            .ff19{color: var(--neutral-silver, #F5F7FA);

                /* Body/Regular/Body 3 */
                font-family: Inter;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px; /* 142.857% */}
        
        .ff20{border-radius: 8px;
            opacity: 0.2;
            background: var(--default-white, #FFF);}        `;
        
  return (
    <div className=" pp15 bg-[#57A35B]">
      <style>{style}</style>
      <div className="pr-[380px]">
        <p className="ff16">KrishiUrjaa</p>
        <p className="ff17">Copyright © 2023 HarshitKhandelwal</p>
        <p className="ff17">All rights reserved</p>
      </div>

      <div className="flex flex-row space-x-[90px]">
        <div className="flex flex-col space-y-[12px]">
          <p className="ff18 pb-[8px]">Company</p>
          <p className="ff19">about us</p>
          <p className="ff19">Blog</p>
          <p className="ff19">Contact us</p>
          <p className="ff19">Pricing</p>
          <p className="ff19">Testimonials</p>
        </div>
        <div className="flex flex-col space-y-[12px]">
          <p className="ff18 pb-[8px]">Support</p>
          <p className="ff19">Help center</p>
          <p className="ff19">Terms of Services</p>
          <p className="ff19"> Legal </p>
          <p className="ff19">privacy policy</p>
          <p className="ff19">status</p>
        </div>
        <div>
            <p className="ff18">Stay up to date</p>
            <div className="ff20">
            <input type="email" placeholder="Your Email address "  name="" id="" />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g clip-path="url(#clip0_9061_40210)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_9061_40210">
            <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>
            </div>
           
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
