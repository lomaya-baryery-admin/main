# main

Добавление и настройка
- prettier + eslint
		- установить prettier + eslint
		- добавить готовый конфиг eslint
		- интегрировать prettier и eslint
		- добавить npm команды `lint` и `lint:fix`
    npm run link
    npm run link.fix

# Таблица
![ОБщий вид таблицы](https://s1.hostingkartinok.com/uploads/images/2022/11/d6cdda949d2fef272ef613eefdc7251b.png)
### Описание
Универсальная таблица для админ-панели. Позволяет генерировать как текстовые данные, так и 
любые другие компоненты.
Реализована на основе библиотеки [TanStack Table](https://tanstack.com/table/v8)
### Пропсы
Компонент<br/>
`<Table defaultData={testData} columnsData={testColumns} rowHeight={40} />`
<br/>
**defaultData** - массив объектов, которыми будет наполнена таблица. В нашем проекте defaultData приходит в ответе с сервера.<br/>
#### Пример:
```
export const testData = [
	{
	name: 'Петя Петров',
	age: 33,
	hobby: 'Любит есть пельмени',
	},
	{
	name: 'Катя Иванова',
	age: 12,
	hobby: 'Играет на гитаре',
	},
	{
	name: 'Иванов Иван',
	age: 22,
	hobby: 'Путешествует',
	},
]; 
```
**columnsData** - массив с описанием внешнего вида для таблицы согласно [документации](https://tanstack.com/table/v8/docs/guide/introduction) и необходимого внешнего вида конкретной таблицы.


*Для каждой таблицы необходимо создавать свой [ColumnHelper](https://tanstack.com/table/v8/docs/guide/column-defs#column-helpers)*

` const testColumnsHelper = createColumnHelper(); `

В столбах необходимо указать заголовки, а также информацию, которая должна быть выведена:

header - форматирование заголовка, cell - форматирование ячейки.
Также могут быть добавлены другие форматерры, полный список в [документации](https://tanstack.com/table/v8/docs/guide/column-defs#column-formatting--rendering)
#### Пример:
```
export const testColumns = [
	testColumnsHelper.accessor((row) => row.name, {
	header: 'Столбец 1',
	cell: (info) => info.getValue(),
	}),
	testColumnsHelper.accessor((row) => row.age, {
	header: 'Столбец 2',
	cell: (info) => info.getValue(),
	}),
	testColumnsHelper.accessor((row) => row.hobby, {
	header: 'Столбец 3',
	cell: (info) => info.getValue(),
	}),
];
```

Из документации следует, что ячейки вы можете как-угодно визуализировать и дополнять, используя в том числе сторонние компоненты.

**rowHeight** - высота строчек в px, задается одим из чисел 40, 60, 80

Используя вычеперечисленные данные, можно получить таблицу следующего внешнего вида:
![Таблица по примеру](https://s1.hostingkartinok.com/uploads/images/2022/11/8c57331f52364bb5a58a271586e761f4.png)

[Код на CodeSandbox](https://codesandbox.io/s/cool-ives-ljjmpo?file=/src/App.js:1003-1012)