import { takeAChance } from './take-a-chance';

const name = 'Dave';

takeAChance(name)
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((error) => {
    console.error(error.message);
  });
