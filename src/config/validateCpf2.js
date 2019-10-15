export function validateCpf(value) {
  if (value === undefined) {
    return false;
  }
  const strCPF = value.toString().replace(/\.|-/g, '');
  let soma = 0;
  let resto;
  if (strCPF.length < 11) {
    return false;
  }

  if (strCPF === '00000000000') {
    return false;
  }

  for (let i = 1; i <= 9; i += 1) {
    soma += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
  }
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(strCPF.substring(9, 10), 10)) {
    return false;
  }

  soma = 0;

  for (let i = 1; i <= 10; i += 1) {
    soma += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
  }
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(strCPF.substring(10, 11), 10)) {
    return false;
  }
  return true;
}
