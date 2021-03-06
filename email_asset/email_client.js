var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'connectogrow@gmail.com',
    pass: 'nova_rise'
  }
});
module.exports=(customer)=>{
  email_template_team=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>CTG | Mail</title>
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        min-width: 100% !important;
      }
  
      img {
        height: auto;
      }
  
      .content {
        width: 100%;
        max-width: 600px;
      }
  
      .header {
        padding: 40px 30px 20px 30px;
      }
  
      .innerpadding {
        padding: 30px 30px 30px 30px;
      }
  
      .borderbottom {
        border-bottom: 1px solid #f2eeed;
      }
  
      .subhead {
        font-size: 15px;
        color: #ffffff;
        font-family: sans-serif;
        letter-spacing: 10px;
      }
  
      .h1,
      .h2,
      .bodycopy {
        color: #153643;
        font-family: sans-serif;
      }
  
      .h1 {
        font-size: 33px;
        line-height: 38px;
        font-weight: bold;
      }
  
      .h2 {
        padding: 0 0 15px 0;
        font-size: 24px;
        line-height: 28px;
        font-weight: bold;
      }
      a:link
      {
        color:white !important;
      }
  
      .bodycopy {
        font-size: 16px;
        line-height: 22px;
      }
  
      .button {
        text-align: center;
        font-size: 18px;
        font-family: sans-serif;
        font-weight: bold;
        padding: 0 30px 0 30px;
      }
  
      .button a {
        color: #ffffff;
        text-decoration: none;
      }
  
      .footer {
        padding: 20px 30px 15px 30px;
      }
  
      .footercopy {
        font-family: sans-serif;
        font-size: 14px;
        color: #ffffff;
      }
  
      .footercopy a {
        color: #ffffff;
        text-decoration: underline;
      }
  
  
      /*@media only screen and (min-device-width: 601px) {
    .content {width: 600px !important;}
    .col425 {width: 425px!important;}
    .col380 {width: 380px!important;}
    }*/
    </style>
  </head>
  
  <body yahoo bgcolor="#ffffff">
    <table width="100%" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <!--[if (gte mso 9)|(IE)]>
          <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
          <tr>
          <td>
          <![endif]-->
          <table bgcolor="#ffffff" class="content" align="center" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td bgcolor="#2D3047" class="header">
                <table width="70" align="left" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td height="70" style="padding: 0 20px 20px 0;">
                      <img class="fix" src="https://swapnil-tiwari.github.io/ctg_v1/images/logo.png" width="70" height="70" border="0" alt="" />
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
              <table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
              <tr>
              <td>
              <![endif]-->
                <table class="col425" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 425px;">
                  <tr>
                    <td height="70">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="subhead" style="padding: 0 0 0 3px;">
                            
                          </td>
                        </tr>
                        <tr>
                          <td class="h1" style="padding: 5px 0 0 0;color:white;">
                            Connect To Grow
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
              </td>
            </tr>
            <tr>
              <td class="innerpadding borderbottom">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td class="h2">
                     Hey ${customer.fname} ${customer.lname}
                    </td>
                  </tr>
                  <tr>
                    <td class="bodycopy" style="color:black;">
                      We have received your query. We will contact you soon<br>
                      <strong>Customer Details: <br>Name - ${customer.fname} ${customer.lname}<br> Email - ${customer.email} <br> Contact Number - ${customer.cno} </strong>   
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="innerpadding borderbottom">
                <table width="115" align="left" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td height="115" style="padding: 0 20px 20px 0;">
                      <img class="fix" src="https://swapnil-tiwari.github.io/ctg_v1/images/logo.png" width="115" height="115" border="0" alt="" />
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
              <table width="380" align="left" cellpadding="0" cellspacing="0" border="0">
              <tr>
              <td>
              <![endif]-->
                <table class="col380" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 380px;">
                  <tr>
                    <td>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="bodycopy" style="font-weight:bold">
                            Thank you for choosing us. For more services on our website.<br>We Connect You Grow!
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 20px 0 0 0;">
                            <table class="buttonwrapper" bgcolor="#effb41" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="button" height="45" style="background:#2D3047; color:white" >
                                  <a href="#">CTG</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
              </td>
            </tr>
            <!-- <tr>
              <td class="innerpadding borderbottom">
                <img class="fix" src="http://placehold.it/600x200" width="100%" border="0" alt="" />
              </td>
            </tr>
            <tr>
              <td class="innerpadding bodycopy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.
              </td>
            </tr> -->
            <tr>
              <td class="footer" bgcolor="#2D3047">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="center" class="footercopy">
                      &reg; Connect To Grow, All Rights Reserved 2019<br/>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding: 20px 0 0 0;">
                      <table border="0" cellspacing="0" cellpadding="0">
                        <br><br>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
    </td>
    </tr>
    </table>
    <![endif]-->
        </td>
      </tr>
    </table>
  </body>`
    var mailOptions = {
        from: 'connectogrow@gmail.com',
        to: `${customer.email}`,
        subject: `Query from  ${customer.fname} ${customer.lname}`,
        html:email_template_team
      };
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}