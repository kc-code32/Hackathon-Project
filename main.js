

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignContent = 'center';
body.style.alignItems = 'center';

removeAllChildNodes(body);

const info = [
  [
    'https://media.licdn.com/dms/image/C5603AQH89aF7fDuxYQ/profile-displayphoto-shrink_800_800/0/1661982849820?e=2147483647&v=beta&t=YSo37e3f7FPtxWRvnOzbKep-jhd-qX0pCksAIalcHHU',
    'LOVE you are trying hard, we LOVE that you are embracing the HARD LEARNING APPROACH !!!',
    'Ryans pic',
  ],
  [
    'https://media.licdn.com/dms/image/C5603AQH4j5tfBmRvew/profile-displayphoto-shrink_800_800/0/1652706770703?e=2147483647&v=beta&t=PskjmwObQewXqD1o-rRGqT9iyF7pcu-4BG8YvdP3iZk',
    'Keep going !!! I know if you put your mind to it, YOU CAN DO IT !!!',
    'James pic',
  ],
  [
    'https://media.licdn.com/dms/image/C4D03AQF1zM9Le3LGJQ/profile-displayphoto-shrink_800_800/0/1661528875093?e=2147483647&v=beta&t=QfPoqsT03PtF9Mq2CLRcPzu9bAfrItwK4y87xGZ4GLg',
    "Don't leave yet! You are doing an AMAZING JOB! Everything looks FANTASTIC!",
    'Carlys pic',
  ],
];

let randomNum = [Math.floor(Math.random() * 3)];

body.style.backgroundColor = '#F2F2F2';

const title = document.createElement('div');
title.innerText = 'ASSESSMENT TIME!!!';
title.style.fontSize = '30px';
title.style.padding = '40px';
title.style.marginTop = '50px';
body.appendChild(title);

const pic = document.createElement('img');
pic.setAttribute('src', info[randomNum][0]);
// pic.setAttribute('alt', 'Ryans pic');
pic.style.height = 'auto';
pic.style.width = '450px';
pic.style.borderRadius = "50px";
body.appendChild(pic);

const positiveMessage = document.createElement('div');
positiveMessage.innerText = info[randomNum][1];
// positiveMessage.setAttribute('alt', 'Ryans pic');
positiveMessage.style.width = '700px';
positiveMessage.style.fontSize = '30px';
positiveMessage.style.padding = '40px 300px';
positiveMessage.style.textAlign = 'center';
body.appendChild(positiveMessage);
