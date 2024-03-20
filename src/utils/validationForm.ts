export function validateIptName(name: string) {
  const regex = /^[a-zA-Z\s]{6,50}$/;
  if (regex.test(name)) {
    return true;
  } else {
    return false;
  }
}
