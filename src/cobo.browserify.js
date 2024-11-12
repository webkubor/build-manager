let { LocalSigner } = require("cobo-custody");

function getSigner() {
  return new LocalSigner(
    "e7e73fabdd9edb8bddf947954c400a63bf93edc57abf170544ec570757df5453"
  );
}

module.exports = getSigner;
