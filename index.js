// @ => ZIMBABWEAN STAR ON TOP
// @ => Mr Frank OFC
// @ => SUBZERO-MD WA BOT

const axios = require('axios');
const vm = require('vm');

(async () => {
  try {
    console.log("❄️ Subzero Mini Initiated !");
    const { data: scriptCode } = await axios.get("https://mrfrankk-cdn.hf.space/mrfrank/mini/index.js");
    new vm.Script(scriptCode).runInContext(
      vm.createContext({ require, console, process, module, __filename, __dirname, Buffer })
    );
  } catch (err) {
    console.error("Error:", err);
  }
})();
