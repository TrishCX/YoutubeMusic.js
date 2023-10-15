import type { Context } from "../interfaces";

export function makeContext(context: Context.IContext): Context.Response {
  const { ...props } = context;

  return {
    context: {
      capabilities: {},
      client: {
        clientName: props.clientName,
        clientVersion: props.clientVersion,
      },
    },
  };
}
