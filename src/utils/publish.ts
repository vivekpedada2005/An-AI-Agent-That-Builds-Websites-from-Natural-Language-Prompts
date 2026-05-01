export const simulatePublish = async (): Promise<string> => {
  await new Promise(r => setTimeout(r, 2000));
  const id = crypto.randomUUID().split('-')[0];
  return `https://${id}.promptforge.live`;
};
