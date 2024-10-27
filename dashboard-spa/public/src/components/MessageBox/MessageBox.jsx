import React from "react";
import "./MessageBox.css";
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';

export default function MessageBox() {
  return (
    <div className="message-box">
        <h3 className="message-box__title">فرم ها</h3>
       <table className="table">
            <tr>
                <th>نام فرم</th>
                <th>تعداد ورودی</th>
                <th>خوانده نشده</th>
            </tr>
            <tr>
                <td>تماس با ما</td>
                <td>125</td>
                <td>67</td>
            </tr>
            <tr>
                <td>خرید عمده</td>
                <td>94</td>
                <td>26</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td className="btn">
                    <a href="#" className="message-box__btn">
                        <MoveToInboxIcon />
                        مشاهده همه
                    </a>
                </td>
            </tr>
       </table>
    </div>
  );
}
