export function isError(err: Error | unknown): err is Error {
  return (err as Error).message !== undefined;
}

export const buildErrorMessage = (
  err: Error | unknown,
  defaultMessage = "Erro ao executar ação"
) => {
  const messagesArray: string[] = isError(err)
    ? err.response?.data?.messages || [err.message]
    : [defaultMessage];

  const message = messagesArray[0];

  return message;
};
