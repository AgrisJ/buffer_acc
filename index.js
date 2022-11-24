// Import stylesheets
import './style.css';
import { whatsLeft } from './whatsLeft';

export const App = function _App() {
  const lowestMonth = Object.keys(
    whatsLeft(App.state.selectedMonth, moneyLeftFromLastMonth).lowestPoint
  );
  const lowestMoney = Object.values(
    whatsLeft(App.state.selectedMonth, moneyLeftFromLastMonth).lowestPoint
  );
  const { endCycle, lowestBeforeLowestMoney } = whatsLeft(
    App.state.selectedMonth,
    moneyLeftFromLastMonth
  );

  return `
  <label>Choose Current Month:
  ${_App.renderMonthInput()}
  </label>
  <datalist id="months">
    <option value="January">
    <option value="February">
    <option value="March">
    <option value="April">
    <option value="June">
    <option value="July">
    <option value="August">
    <option value="September">
    <option value="October">
    <option value="November">
    <option value="December">
  </datalist>

<p id="info">Money left from last month: ${moneyLeftFromLastMonth}</p>
<p id="info">End cycle profit: ${endCycle}</p>
<p id="buffer">Mid-profit until "${lowestMonth}":  ${lowestMoney}</p>
<p id="untilBuffer">Mid-profit + borrow until "${lowestMonth}" of TOTAL:  ${lowestBeforeLowestMoney}</p>

<h4>Overview</h4>
${_App.renderList()}
  `;
};

App.state = {
  selectedMonth: new Date().toLocaleString('en-us', { month: 'long' }),
  selectMonth: () => {
    App.state.selectedMonth = document.getElementById('currMonth').value;
    renderApp();
    selectMonthListener();
  },
};

App.renderMonthInput = () => {
  const input = document.createElement('input');
  input.setAttribute('id', 'currMonth');
  input.setAttribute('list', 'months');
  input.setAttribute('type', 'search');
  return stringifyElmHTML(input);
};

App.renderList = () => {
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'list');

  const arr = whatsLeft(
    App.state.selectedMonth,
    moneyLeftFromLastMonth
  ).wholePeriod.forEach((item) => {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += `${Object.keys(item)}: ${Object.values(item)}`;
  });
  return stringifyElmHTML(ul);
};

const renderApp = () => {
  document.getElementById('app').innerHTML = App();
};

function selectMonthListener() {
  document
    .getElementById('currMonth')
    .addEventListener('change', App.state.selectMonth);
  document.getElementById('currMonth').value = App.state.selectedMonth;
}

function stringifyElmHTML(element) {
  const container = document.createElement('div');
  container.appendChild(element);
  return container.innerHTML;
}

///////////////////////////////////////////////////////////////////////////////////
// @moneyLeftFromLastMonth = what's left from last month after all current month payments;

const moneyLeftFromLastMonth = 7861; //3470 14552
//////////////////////////////////////////////////////////////////////////////////

renderApp();
selectMonthListener();
