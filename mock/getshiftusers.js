module.exports = () => {
  const name = [
    'Бахтияр',
    'Булат',
    'Габдулла',
    'Газиз',
    'Гаяз',
    'Дамир',
    'Закир',
    'Зариф',
    'Зиннур',
    'Зуфар',
    'Ибрагим',
    'Ильгиз',
    'Ильдар',
  ];
  const surname = [
    'Арсланов',
    'Асфандияров',
    'Багаутдинов',
    'Баймуратов',
    'Бикчентаев',
    'Гиляутдинов',
    'Гилимханов',
    'Давлетов',
    'Загидуллин',
    'Исангулов',
    'Ишмухаметов',
    'Камалетдинов',
    'Курбангалеев',
    'Мухамедьяров',
    'Нигматуллин',
  ];
  const phone = ['+79994569876', '+79875642277', '+79148794692', '+79579873411', '+79558761423'];
  const city = [
    'Уфа',
    'Бакалы',
    'Уфа',
    'Стерлитамак',
    'Салават',
    'Нефтекамск',
    'Октябрьский',
    'Туймаз',
  ];
  const birthday = ['2011-03-22', '2012-07-11', '2014-02-22', '2012-10-07', '2015-12-19'];

  const data = { users: [] };

  for (let i = 0; i < 300; i++) {
    data.users.push({
      user_id: `${Math.round(Math.random() * 1000000)}-${i}`,
      name: name[Math.round(Math.random() * 13)],
      surname: surname[Math.round(Math.random() * 15)],
      date_of_birth: birthday[Math.round(Math.random() * 5)],
      city: city[Math.round(Math.random() * 8)],
      phone: phone[Math.round(Math.random() * 5)],
      user_tasks: [],
    });
  }
  return data;
};
