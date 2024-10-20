import React from "react";
import "./CommentBox.css";
import user1 from "./../../asset/images/user1.webp"
import user2 from "./../../asset/images/user2.webp"

export default function CommentBox() {
  return (
    <div className="comment-box">
        <h3 className="comment-box__title">کامنت ها</h3>
       <table className="table">
            <tr>
                <th>تصویر کاربر</th>
                <th>نام کاربر</th>
                <th>متن کامنت</th>
            </tr>
            <tr>
                <td>
                    <div className="comment-box__image">
                        <img src={user1} alt=""  />
                    </div>
                </td>
                <td>مهیار مهرورزان</td>
                <td className="comment-box__text">کیفیت عالی بود. ممنون ز فروشگاهتون😍❤</td>
            </tr>
            <tr>
                <td>
                    <div className="comment-box__image">
                        <img src={user2} alt=""  />
                    </div>
                </td>
                <td>ریحانه مظاهری</td>
                <td className="comment-box__text">عالی بود</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td className="btn">
                    <a href="#" className="comment-box__btn">
                        مشاهده همه
                    </a>
                </td>
            </tr>
       </table>
    </div>
  );
}
