// BigInt
// kalau mau bikin angka yang melebihi MAX_SAFE_INTEGER disarankan pakai tipe BigInt

const a = BigInt(Number.MAX_SAFE_INTEGER);
const b = BigInt(Number.MAX_SAFE_INTEGER);

const c = a + b;
console.log(c);
console.log(typeof c);
