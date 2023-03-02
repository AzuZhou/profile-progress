const getProgress = (items) => {
  const tasks = items.flatMap((item) => item.tasks);

  const data = tasks.reduce(
    (acc, val) => {
      return {
        sum: acc.sum + val.value,
        checkedSum: val.checked ? acc.checkedSum + val.value : acc.checkedSum
      };
    },
    { sum: 0, checkedSum: 0 }
  );

  return Math.round((data.checkedSum / data.sum) * 100);
};

export { getProgress };
