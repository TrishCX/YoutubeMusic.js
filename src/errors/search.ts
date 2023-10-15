export async function checkErrors(specifics?: any, message?: string) {
  if (!specifics) throw EvalError(message as string);
  else return;
}
