const numbers = [12.5, 3.45, 1.75, 2.3];

const sum = (nums) => nums.reduce((num1, num2) => num1 + num2);

class Budget {
  #entries;
  constructor(entries) {
    this.#entries = entries;
  }

  total() {
    return sum(this.#entries);
  }

  display() {
    return this.total().toFixed(2);
  }
}

const main = () => {
  const budget = new Budget(numbers);

  console.log(budget.display());
};

main();
