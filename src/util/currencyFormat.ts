const currencyFormat = (num: any) => {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
export default currencyFormat;
