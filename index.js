module.exports = function upgradeVersion(version, base = 100) {
  const versionDigits = version
    .split('.')
    .reverse()
    .map(v => Number(v));

  let finished = false;
  const upgradedVersionDigits = versionDigits.map(digit => {
    if (finished) {
      return digit;
    }

    if (digit < base - 1) {
      finished = true;
      return digit + 1;
    } else {
      return 0;
    }
  });

  return upgradedVersionDigits.reverse().join('.');
}