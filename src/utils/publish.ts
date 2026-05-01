export const simulatePublish = async (): Promise<string> => {
  await new Promise(r => setTimeout(r, 2000));
  const id = Math.random().toString(36).substr(2, 8);
  return `https://${id}.promptforge.live`;
};
