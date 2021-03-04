const solution = (record) => {
  const datas = [];
  const userInfo = {};

  record.forEach(data => {
    const [type, uid, nickname] = data.split(' ');
  
    manageUser(userInfo, type, uid, nickname);
    log(datas, type, uid);
  });
  
  return print(userInfo, datas);
};

const manageUser = (userInfo, type, uid, nickname) => {
  if (type === 'Enter') {
    if (!userInfo[uid]) {
      userInfo[uid] = { nickname }
    }

    userInfo[uid].nickname = nickname;
    return;
  }

  if (type === 'Change') {
    userInfo[uid].nickname = nickname;
  }
};

const log = (datas, type, uid) => {
  if (type === 'Change') {
    return;
  }

  datas.push({ type, uid });
};

const print = (userInfo, datas) => {
  const message = {
    'Enter': (nickname) => `${nickname}님이 들어왔습니다.`,
    'Leave': (nickname) => `${nickname}님이 나갔습니다.`,
  };

  return datas.map(({ type, uid }) => message[type](userInfo[uid].nickname));
};

test('solution', () => {
  expect(solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
  ])).toEqual([
    "Prodo님이 들어왔습니다.",
    "Ryan님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Prodo님이 들어왔습니다."
  ]);
});
