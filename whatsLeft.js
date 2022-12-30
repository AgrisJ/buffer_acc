import { data } from './data';
import { App } from './index';
import { BORNEPENGE } from './cost_variables';

export const whatsLeft = (currMonth, currentOnAccount) => {
  // Starting Point should be July
  const orderJulyStart = [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5],
    orderJanStart = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const JulyStartData = mapOrder(data, orderJulyStart);
  const justMonths = JulyStartData.map((item) => item.Month);
  //console.table("%cWhole Data= ", 'color:green; text-size:1.8em;',  data)

  const allMoney = JulyStartData.reduce(
    (arr, month) => arr.concat(Object.values(month.Money[0])),
    []
  );

  const pulledMoneyByMonth = JulyStartData.map((item) => {
    const container = {};
    container[item.Month] = Object.values(item.Money[0]);
    return container;
  });

  function startFromThis(month) {
    const monthIndex = justMonths.indexOf(month),
      remainingMonths = justMonths.slice(monthIndex, justMonths.length),
      justMoney = [],
      wholePeriod = [];

    remainingMonths.forEach((month) => {
      const insideMonthIndex = justMonths.indexOf(month),
        prevMonthBalance = justMoney[justMoney.length - 1] || 0;
      let monthBalance =
        Object.values(pulledMoneyByMonth[insideMonthIndex])[0].reduce(
          (acc, val) => acc + val
        ) + prevMonthBalance;

      const oneMonth = { [month]: monthBalance }, // currentOnAccount added only on the first month (fromthis)
        moneyPerMonth = Object.values(oneMonth)[0],
        nameOfMonth = Object.keys(oneMonth);
      justMoney.push(moneyPerMonth);
      wholePeriod.push({ [nameOfMonth]: moneyPerMonth });

      wholePeriod[0] = { [App.state.selectedMonth]: currentOnAccount };
      justMoney[0] = currentOnAccount;
    });

    const lowestPoint = wholePeriod.reduce(
      (min, number) =>
        +Object.values(min) > +Object.values(number) ? number : min,
      wholePeriod[0]
    );

    const minPoint = wholePeriod
      .map((val) => Object.values(val)[0])
      .reduce((min, number) => (number < min ? number : min));
    console.log({ minPoint });

    //console.log("lowestPoint", {lowestPoint, wholePeriod});

    const processingNewPeriod = () => {
      const indexOfLowest = Object.values(wholePeriod)
        .map((item) => item[Object.keys(lowestPoint)[0]])
        .indexOf(+Object.values(lowestPoint));
      const newRange = wholePeriod.slice(
        0,
        indexOfLowest ? indexOfLowest : indexOfLowest + 1
      );
      const result = newRange.reduce(
        (smallestNumber, number) =>
          +Object.values(number) < +Object.values(smallestNumber)
            ? number
            : smallestNumber,
        newRange[0]
      );

      return Object.values(result);
    };

    const lowestBeforeLowestMoney = processingNewPeriod();

    return {
      lowestPoint,
      lowestBeforeLowestMoney,
      endCycle: justMoney[justMoney.length - 1],
      wholePeriod,
    };
  }

  return startFromThis(currMonth);
};

function mapOrder(array, order) {
  return array.slice().sort((a, b) => {
    const A = array.indexOf(a),
      B = array.indexOf(b);
    return order.indexOf(A) > order.indexOf(B) ? 1 : -1;
  });
}

export function moneyLeftProcessing(selectedMonth, moneyLeftFromLastMonth) {
  // If Bornepenge - add that
  const isBornePengeMonth = data
    .find((m) => m.Month === selectedMonth)
    .Money[0].hasOwnProperty('Bornepenge');

  let moneyLeft = moneyLeftFromLastMonth;

  if (isBornePengeMonth) moneyLeft = moneyLeftFromLastMonth + BORNEPENGE;
  const bornepenge = isBornePengeMonth ? BORNEPENGE : null;

  return { moneyLeft, bornepenge };
}
