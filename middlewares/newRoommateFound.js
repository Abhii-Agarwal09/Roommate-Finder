const roommateFoundEmailGenerator = (studentName) => {
    const html = `
    <html>
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    </style>
    <body
        style="
            margin: 0;
            font-family: Poppins;
            font-size: 16px;
            color: #001963;
            background-color: #fffffe;
            overflow-x: hidden;
        "
    >
        <table
            role="presentation"
            border="0"
            cellspacing="0"
            cellpadding="0"
            width="100%"
            style="
                width: 100% !important;
                min-width: 100% !important;
                padding: 1rem 1rem;
                box-shadow: 0 0.75rem 1rem 0 rgba(0, 0, 0, 0.14),
                    0 17px 50px 0 rgba(0, 0, 0, 0.19);
                background-color: #e3f1ff;
            "
        >
            <tbody>
                <tr>
                    <td valign="middle" width="100%" align="left">
                        <a
                            href="https://roommate.vitrendz.com/"
                            style="
                                margin: 0;
                                color: #0073b1;
                                display: inline-block;
                                text-decoration: none;
                            "
                        >
                            <table
                                role="presentation"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                width="100%"
                            >
                                <tbody>
                                    <tr>
                                        <td
                                            align="left"
                                            valign="middle"
                                            style="
                                                padding: 0 0 0;
                                                padding-top: 7px;
                                            "
                                        >
                                            <p
                                                style="
                                                    margin: 0;
                                                    font-weight: 600;
                                                "
                                            >
                                                <span
                                                    style="
                                                        word-wrap: break-word;
                                                        color: #001963;
                                                        word-break: break-word;
                                                        font-weight: 600;
                                                        font-size: 80%;
                                                        line-height: 1.429;
                                                    "
                                                    >Hey! ${studentName}</span
                                                >
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table></a
                        >
                    </td>

                    <td align="right" valign="middle">
                        <a
                            href="https://roommate.vitrendz.com/"
                            style="
                                color: #fffffe;
                                display: inline-block;
                                text-decoration: none;
                            "
                        >
                            <img
                                border="0"
                                src="https://drive.google.com/uc?id=13DYoJybuIdnt3yddhAle1NE7AdxbkzTR"
                                height="30"
                                style="
                                    max-height: 30px;
                                    outline: none;
                                    color: #ffffff;
                                    max-width: unset !important;
                                    text-decoration: none;
                                "
                        /></a>
                    </td>
                    <td width="1">&nbsp;</td>
                </tr>
            </tbody>
        </table>
        <div>
            <img
                src="https://drive.google.com/uc?id=1TANCF8-LCo1-HUvr_nKL41B-YoaDVwUy"
                style="
                    display: block;
                    margin: auto;
                    padding-top: 1rem;
                    height: 10rem;
                "
            />
            <div
                style="
                    max-width: 25rem;
                    color: #001963;
                    font-weight: 700;
                    margin-right: 14px;
                    margin: auto;
                    text-align: center;
                    font-family: Poppins;
                "
            >
                <h1 style="font-family: Arial">
                    Yay, we found your <br />
                    Roommate!
                </h1>
                <p style="font-family: Arial">
                    Click below to meet your new <br /><strong>Roommate</strong
                    >.
                    <br />
                    <br />
                </p>
                <button
                    style="
                        font-size: 1rem;
                        font-weight: 700;
                        border: none;
                        padding: 0.75rem 2rem;
                        text-align: center;
                        cursor: pointer;
                        border-radius: 30px;
                        background-color: #5093f1;
                    "
                >
                    <a
                        href="https://roommate.vitrendz.com/"
                        style="text-decoration: none; color: white"
                    >
                        Click Here
                    </a>
                </button>
            </div>
        </div>
        <div
            style="
                height: 10vh;
                width: 100%;
                margin: auto;
                margin-top: 5rem;
                background-color: #e3f1ff;
                padding-top: 2rem;
            "
        >
            <a href="https://vitrendz.com/">
                <img
                    src="https://drive.google.com/uc?id=1oVJiKB4TzwJKtWlJ2liaDJc8N7-1C5lD"
                    style="height: 70%; display: block; margin: auto"
                />
            </a>
            <br />
        </div>

        <div style="height: 5vh; background-color: #badcfb; padding: 0.5rem">
            <p
                style="
                    color: #001963;
                    text-align: center;
                    align-self: center;
                    font-size: 0.75rem;
                "
            >
                All Rights Reserved © 2022
            </p>
        </div>
    </body>
</html>
    `;
    return html;
}

module.exports = roommateFoundEmailGenerator;