import React from 'react'
import "./Features.css"

import { LineChart, Line } from 'recharts';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ForumIcon from '@mui/icons-material/Forum';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import ChartData from '../../data';

export default function Features() {
  return (
    <section className="features">
        <article className="weekly-sale">
            <div className="weekly-sale__heading">
                <ShoppingBagIcon />
                <div className="weekly-sale__satus">
                    <TrendingUpIcon />
                    <span>+2.6%</span>
                </div>
            </div>
                <h6 className="weekly-sale__title">Weekly Sale</h6>
                <div className="weekly-sale__count">
                    <h3 className="weekly-sale__number">714 هزار</h3>
                    <div className="weekly-sale__chart">
                        <LineChart width={50} height={50} data={ChartData.weeklySale}>
                            <Line type="monotone" dataKey="uv" stroke="#007bff" dot={false} />
                        </LineChart>
                    </div>
                </div>
        </article>
        <article className="new-user">
            <div className="new-user__heading">
                <PeopleAltIcon />
                <div className="new-user__satus">
                    <TrendingDownIcon />
                    <span>-0.1%</span>
                </div>
            </div>
                <h6 className="new-user__title">New User</h6>
                <div className="new-user__count">
                    <h3 className="new-user__number">1.35 میلیون</h3>
                    <div className="new-user__chart">
                        <LineChart width={50} height={50} data={ChartData.newUser}>
                            <Line type="monotone" dataKey="uv" stroke="#EF6C00" dot={false} />
                        </LineChart>
                    </div>
                </div>
        </article>
        <article className="order">
            <div className="order__heading">
                <ShoppingCartIcon />
                <div className="order__satus">
                    <TrendingUpIcon />
                    <span>+2.8%</span>
                </div>
            </div>
                <h6 className="order__title">Order</h6>
                <div className="order__count">
                    <h3 className="order__number">1.72 میلیون</h3>
                    <div className="order__chart">
                        <LineChart width={50} height={50} data={ChartData.order}>
                            <Line type="monotone" dataKey="uv" stroke="#7B1FA2" dot={false} />
                        </LineChart>
                    </div>
                </div>
        </article>
        <article className="messages">
            <div className="messages__heading">
                <ForumIcon />
                <div className="messages__satus">
                    <TrendingUpIcon />
                    <span>+3.6%</span>
                </div>
            </div>
                <h6 className="messages__title">Message</h6>
                <div className="messages__count">
                    <h3 className="messages__number">234</h3>
                    <div className="messages__chart">
                        <LineChart width={50} height={50} data={ChartData.messages}>
                            <Line type="monotone" dataKey="uv" stroke="#dc3545" dot={false} />
                        </LineChart>
                    </div>
                </div>
        </article>
    </section>
  )
}
