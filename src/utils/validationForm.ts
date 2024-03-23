export function validatePassword(password: string, secondPassword: string) {
  if (password === secondPassword) return true;
  return false;
}
