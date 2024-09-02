// Import stylesheets
import './style.css';
import { whatsLeft, moneyLeftProcessing } from './whatsLeft';

export const App = function _App() {
  const { moneyLeft, bornepenge } = moneyLeftProcessing(
    App.state.selectedMonth,
    moneyLeftFromLastMonth
  );

  const lowestMonth = Object.keys(
    whatsLeft(App.state.selectedMonth, moneyLeft).lowestPoint
  );
  const lowestMoney = Object.values(
    whatsLeft(App.state.selectedMonth, moneyLeft).lowestPoint
  );
  const { endCycle, lowestBeforeLowestMoney } = whatsLeft(
    App.state.selectedMonth,
    moneyLeft
  );

  return `
  <label>Choose Current Month:</label>
  <select id="currMonth">
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>

<p id="info">Money left from last month: ${moneyLeftFromLastMonth} ${
    bornepenge ? '(+' + bornepenge + ')' : ''
  }</p>
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

App.renderList = () => {
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'list');

  const { moneyLeft } = moneyLeftProcessing(
    App.state.selectedMonth,
    moneyLeftFromLastMonth
  );

  const arr = whatsLeft(App.state.selectedMonth, moneyLeft).wholePeriod.forEach(
    (item) => {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML += `${Object.keys(item)}: ${Object.values(item)}`;
    }
  );
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

const moneyLeftFromLastMonth = 5954;
//////////////////////////////////////////////////////////////////////////////////

renderApp();
selectMonthListener();
