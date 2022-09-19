const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emosi) => {
  try {
    const dataEmosiTheaterIXX = await promiseTheaterIXX();
    const dataEmosiTheaterVGC = await promiseTheaterVGC();

    const dataCountTheaterVGC = dataEmosiTheaterVGC.filter((res) => res.hasil === emosi);
    const dataCountTheaterIXX = dataEmosiTheaterIXX.filter((res) => res.hasil === emosi);
    return dataCountTheaterVGC.length + dataCountTheaterIXX.length;
  } catch (error) {}
};

module.exports = {
  promiseOutput,
};