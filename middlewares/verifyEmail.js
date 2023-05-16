const verifyEmailGenerator = (payload, data) => {
    // const host = request.get('host');
    // const link = `http://${host}/verify?token=${payload.emailToken}`;
    const OTP = data;
    const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="x-apple-disable-message-reformatting" />
    <title></title>
    <style type="text/css">
      @media screen {
        @font-face {
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: 400;
          src: local("Fira Sans Regular"), local("FiraSans-Regular"),
            url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: 400;
          src: local("Fira Sans Regular"), local("FiraSans-Regular"),
            url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2)
              format("woff2");
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        @font-face {
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: 500;
          src: local("Fira Sans Medium"), local("FiraSans-Medium"),
            url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: 500;
          src: local("Fira Sans Medium"), local("FiraSans-Medium"),
            url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2)
              format("woff2");
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        @font-face {
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: 700;
          src: local("Fira Sans Bold"), local("FiraSans-Bold"),
            url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: 700;
          src: local("Fira Sans Bold"), local("FiraSans-Bold"),
            url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnLK3eQhf6Xl7Gl3LX.woff2)
              format("woff2");
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        @font-face {
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: 800;
          src: local("Fira Sans ExtraBold"), local("FiraSans-ExtraBold"),
            url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Fira Sans";
          font-style: normal;
          font-weight: 800;
          src: local("Fira Sans ExtraBold"), local("FiraSans-ExtraBold"),
            url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2)
              format("woff2");
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
      }
    </style>
    <style type="text/css">
      #outlook a {
        padding: 0;
      }

      .ReadMsgBody,
      .ExternalClass {
        width: 100%;
      }

      .ExternalClass,
      .ExternalClass p,
      .ExternalClass td,
      .ExternalClass div,
      .ExternalClass span,
      .ExternalClass font {
        line-height: 100%;
      }

      div[style*="margin: 14px 0"],
      div[style*="margin: 16px 0"] {
        margin: 0 !important;
      }

      table,
      td {
        mso-table-lspace: 0;
        mso-table-rspace: 0;
      }

      table,
      tr,
      td {
        border-collapse: collapse;
      }

      body,
      td,
      th,
      p,
      div,
      li,
      a,
      span {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        mso-line-height-rule: exactly;
      }

      img {
        border: 0;
        outline: none;
        line-height: 100%;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
      }

      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        -webkit-font-smoothing: antialiased;
      }

      .pc-gmail-fix {
        display: none;
        display: none !important;
      }

      @media screen and (min-width: 621px) {
        .pc-email-container {
          width: 620px !important;
        }
      }
    </style>
    <style type="text/css">
      @media screen and (max-width: 620px) {
        .pc-sm-p-20 {
          padding: 20px !important;
        }
        .pc-sm-p-35-10-15 {
          padding: 35px 10px 15px !important;
        }
        .pc-sm-mw-50pc {
          max-width: 50% !important;
        }
        .pc-sm-p-35-30 {
          padding: 35px 30px !important;
        }
      }
    </style>
    <style type="text/css">
      @media screen and (max-width: 525px) {
        .pc-xs-p-10 {
          padding: 10px !important;
        }
        .pc-xs-p-25-0-5 {
          padding: 25px 0 5px !important;
        }
        .pc-xs-mw-100pc {
          max-width: 100% !important;
        }
        .pc-xs-br-disabled br {
          display: none !important;
        }
        .pc-xs-p-25-20 {
          padding: 25px 20px !important;
        }
        .pc-xs-fs-30 {
          font-size: 30px !important;
        }
        .pc-xs-lh-42 {
          line-height: 42px !important;
        }
      }
    </style>
    <!--[if mso]>
      <style type="text/css">
        .pc-fb-font {
          font-family: Helvetica, Arial, sans-serif !important;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:AllowPNG /><o:PixelsPerInch
            >96</o:PixelsPerInch
          ></o:OfficeDocumentSettings
        ></xml
      ><!
    [endif]-->
  </head>
  <body
    style="
      width: 100% !important;
      margin: 0;
      padding: 0;
      mso-line-height-rule: exactly;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      background-color: #f4f4f4;
    "
    data-new-gr-c-s-check-loaded="14.984.0"
    data-gr-ext-installed=""
    class=""
  >
    <div
      style="
        display: none !important;
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        height: 0;
        width: 0;
        max-height: 0;
        max-width: 0;
        font-size: 1px;
        line-height: 1px;
        color: #151515;
      "
    >
      This is preheader text. Some clients will show this text as a preview.
    </div>
    <div
      style="
        display: none !important;
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        height: 0;
        width: 0;
        max-height: 0;
        max-width: 0;
      "
    >
      ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
    </div>
    <table
      class="pc-email-body"
      width="100%"
      bgcolor="#f4f4f4"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="table-layout: fixed"
    >
      <tbody>
        <tr>
          <td class="pc-email-body-inner" align="center" valign="top">
            <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="" color="#f4f4f4" />
              </v:background>
            <![endif]-->
            <!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
            <table
              class="pc-email-container"
              width="100%"
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="margin: 0 auto; max-width: 620px"
            >
              <tbody>
                <tr>
                  <td align="left" valign="top" style="padding: 0 10px">
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="20"
                            style="font-size: 1px; line-height: 1px"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td valign="top">
                            <!-- BEGIN MODULE: Menu 1 -->
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class=""
                                    bgcolor="#ffffff"
                                    valign="top"
                                    style="
                                      padding: 0px 30px;
                                      background-color: #ffffff;
                                    "
                                    pc-default-class="pc-sm-p-20 pc-xs-p-10"
                                    pc-default-padding="25px 30px"
                                  >
                                    <table
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="padding: 10px"
                                          >
                                            <a
                                              href="https://vitrendz.com/"
                                              style="text-decoration: none"
                                              ><img
                                                src="https://i.ibb.co/4dJvqJC/VITrendz-logo.png"
                                                width="200"
                                                height=""
                                                alt=""
                                                style="
                                                  max-width: 100%;
                                                  border: 0;
                                                  line-height: 100%;
                                                  outline: 0;
                                                  -ms-interpolation-mode: bicubic;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                  height: auto;
                                                "
                                            /></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!-- END MODULE: Menu 1 -->
                            <!-- BEGIN MODULE: Feature 1 -->
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class=""
                                    style="
                                      padding: 10px 20px 0px;
                                      background-color: #ffffff;
                                    "
                                    valign="top"
                                    bgcolor="#ffffff"
                                    pc-default-class="pc-sm-p-35-10-15 pc-xs-p-25-0-5"
                                    pc-default-padding="40px 20px"
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            class="pc-fb-font"
                                            style="
                                              font-family: 'Fira Sans',
                                                Helvetica, Arial, sans-serif;
                                              font-size: 18px;
                                              font-weight: 300;
                                              line-height: 28px;
                                              letter-spacing: -0.2px;
                                              color: #000000;
                                              padding: 0 20px;
                                            "
                                            valign="top"
                                          >
                                            Hi there,<br /><br />You have
                                            requested to make an account on
                                            Roommate Finder by VITrendz<br /><br />Your OTP to verify account is ${OTP}.
                                            <br /><br />Enter this OTP to verify your account and then proceed further.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            height="0"
                                            style="
                                              font-size: 1px;
                                              line-height: 1px;
                                            "
                                          >
                                            &nbsp;
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!-- END MODULE: Feature 1 -->
                            <!-- BEGIN MODULE: Call to Action 1 -->
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="pc-sm-p-35-30 pc-xs-p-25-20"
                                    style="
                                      padding: 40px 30px 32px;
                                      background-color: #ffffff;
                                    "
                                    valign="top"
                                    bgcolor="#ffffff"
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="padding: 8px 0"
                                            valign="top"
                                            align="center"
                                          >
                                            <table
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              role="presentation"
                                            >
                                              <tbody></tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!-- END MODULE: Call to Action 1 -->
                            <!-- BEGIN MODULE: Feature 1 -->
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class=""
                                    style="
                                      padding: 0px 20px;
                                      background-color: #ffffff;
                                    "
                                    valign="top"
                                    bgcolor="#ffffff"
                                    pc-default-class="pc-sm-p-35-10-15 pc-xs-p-25-0-5"
                                    pc-default-padding="40px 20px"
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            class="pc-fb-font"
                                            style="
                                              font-family: 'Fira Sans',
                                                Helvetica, Arial, sans-serif;
                                              font-size: 17px;
                                              font-weight: 300;
                                              line-height: 28px;
                                              letter-spacing: -0.2px;
                                              color: #000000;
                                              padding: 0 20px;
                                            "
                                            valign="top"
                                          >
                                            Regards,<br />The VITrendz Team<br />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            height="0"
                                            style="
                                              font-size: 1px;
                                              line-height: 1px;
                                            "
                                          >
                                            &nbsp;
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!-- END MODULE: Feature 1 -->
                            <!-- BEGIN MODULE: Feature 1 -->
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    height="0"
                                    style="font-size: 1px; line-height: 1px"
                                  >
                                    &nbsp;
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class=""
                                    style="
                                      padding: 0px 20px;
                                      background-color: #f7f7f7;
                                    "
                                    valign="top"
                                    bgcolor="#f7f7f7"
                                    pc-default-class="pc-sm-p-35-10-15 pc-xs-p-25-0-5"
                                    pc-default-padding="40px 20px"
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            class="pc-fb-font"
                                            style="
                                              font-family: 'Fira Sans',
                                                Helvetica, Arial, sans-serif;
                                              font-size: 12px;
                                              font-weight: 300;
                                              line-height: 28px;
                                              letter-spacing: -0.2px;
                                              color: #000000;
                                              padding: 0 20px;
                                            "
                                            valign="top"
                                          >
                                            <div style="text-align: center">
                                              VITrendz, Inc.
                                            </div>
                                            <div style="text-align: center">
                                              VIT, Vellore
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            height="0"
                                            style="
                                              font-size: 1px;
                                              line-height: 1px;
                                            "
                                          >
                                            &nbsp;
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!-- END MODULE: Feature 1 -->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="20"
                            style="font-size: 1px; line-height: 1px"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Fix for Gmail on iOS -->
    <div
      class="pc-gmail-fix"
      style="white-space: nowrap; font: 15px courier; line-height: 0"
    >
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
  </body>
</html>
`;

    return html;
};

module.exports = verifyEmailGenerator;
