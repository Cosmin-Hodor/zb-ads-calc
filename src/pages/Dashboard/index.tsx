import { Chart, registerables } from 'chart.js';
import { useState, useRef, useEffect } from 'react';

Chart.register(...registerables);

interface ChartData {
  spendings: number[],
  maxDailyAllowance: number[],
  moneyAfterSpendings: number[],
}

const Dashboard = () => {
  const [monthlyBudget, setMonthlyBudget] = useState(0);
  const [economyMode, setEconomyMode] = useState(false);
  const [spendings, setSpendings] = useState<number[]>([]);
  const [moneyAfterSpendings, setMoneyAfterSpendings] = useState<number[]>([]);
  const [maxDailyAllowance, setMaxDailyAllowance] = useState<number[]>([]);

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const generateChartData = (receivedData: ChartData) => {
    const labels = Array.from({ length: receivedData.spendings.length }, (_, i) => (i + 1).toString());
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Max Allowance',
          data: receivedData.maxDailyAllowance,
          fill: false,
          borderColor: 'rgb(0, 166, 255)',
        },
        {
          label: 'Spending',
          data: receivedData.spendings,
          fill: false,
          borderColor: 'rgb(255, 0, 0)',
        },
        {
          label: 'Remaining',
          data: receivedData.moneyAfterSpendings,
          fill: false,
          borderColor: 'rgb(0, 255, 0)',
        },
      ],
    };
    return data;
  };

  const calculateDailyBudget = (remainingSum: number, daysLeft: number) => {
    if (economyMode) {
      return remainingSum / daysLeft / 2;
    } else {
      return remainingSum / daysLeft;
    }
  };

  useEffect(() => {
    const generateSpendings = () => {
      const newSpendings: number[] = [];
      const newMaxDailyAllowance: number[] = [];
      const newAmountAfterSpendingsForToday: number[] = [];

      let remainingSum = monthlyBudget;
      let remainingDays = 30;

      while (remainingDays > 0) {
        const isLastDay = remainingDays === 1;
        const dailyBudget = calculateDailyBudget(remainingSum, remainingDays);
        const randomCost = isLastDay ? remainingSum : Math.random() * Math.max(dailyBudget);

        newMaxDailyAllowance.push(remainingSum / remainingDays);
        newAmountAfterSpendingsForToday.push(remainingSum);
        newSpendings.push(randomCost);

        remainingDays--;
        remainingSum -= randomCost;
      }

      setMaxDailyAllowance(newMaxDailyAllowance);
      setMoneyAfterSpendings(newAmountAfterSpendingsForToday);
      setSpendings(newSpendings);
    };

    if (monthlyBudget > 0) {
      generateSpendings();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyBudget, economyMode]);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const chartData = generateChartData({ spendings, maxDailyAllowance, moneyAfterSpendings });

        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: chartData,
          options: {
            scales: {
              x: {
                type: 'category',
              },
            },
          },
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spendings]);
  return (
    <div>
      <h2>Simulate your spendings</h2>

      <p>Make every penny count as you strategically allocate your budget towards high-converting activities. <br />
      🔥 Burn through money, but do it smart!</p>

      <div>
        <label htmlFor="monthlyBudget">Monthly Budget: </label>
        <input
          type="number"
          id="monthlyBudget"
          value={monthlyBudget}
          onChange={(e) => setMonthlyBudget(Number(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="economyMode">Economy Mode</label>
        <input
          type="checkbox"
          id="economyMode"
          checked={economyMode}
          onChange={(e) => setEconomyMode(e.target.checked)}
        />
      </div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default Dashboard;