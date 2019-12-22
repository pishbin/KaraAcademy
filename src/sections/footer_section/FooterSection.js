import React, { memo } from 'react';
import './FooterSection';

function FooterSection(props) {
    console.log('FooterSection')
    return (
        <footer className=" footerFix rtl" style={{
            backgroundColor: '#2983ca4f',
            justifyContent: 'center',
            alignItems: 'cenetr',
            textAlign: 'center',
            padding: 5,
            fontFamily: 'irs'
        }}>
            <div>
                <span style={{color:'#434040'}}>     سامانه مدیریت آموزشگاه کارا        </span>
                <span className="authorStyle">

                    ایجاد شده توسط نازدار پیش بین      <small style={{marginRight:10}}>( آذر 98 )</small>  </span>
            </div>
        </footer>
    );
}
export default memo(FooterSection);