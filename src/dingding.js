const https = require('https');
// const querystring = require('querystring');

const webhook_url = "https://oapi.dingtalk.com/robot/send?access_token=d29b10dc99884e4a8baad9bd06f3727759cc930e37f350234cbe0bbe63c4e924";



// 图文链接
const data = {
    "msgtype": "link",
    "link": {
      "title": "新的一天开始了",
      "text": "党委: 测测",
      "picUrl": "https://p.ipic.vip/o1f0lh.jpeg",
      "messageUrl": "https://p.ipic.vip/o1f0lh.jpeg"
    }
  };
  

// 普通消息
const message = {
  msgtype: 'text',
  text: {
    content: '党委:准备下班了 @所有人'
  },
  at: {
    isAtAll: true
  }
};


const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
};

const req = https.request(webhook_url, options, res => {
  let response = '';
  res.on('data', chunk => {
    response += chunk;
  });
  res.on('end', () => {
    console.log(response);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(JSON.stringify(message));
req.end();
