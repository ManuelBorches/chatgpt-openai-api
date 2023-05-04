import openai from './chatgpt';

const queryChatGptApi = async (
  prompt: string,
  chatId: string,
  model: string
) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err: Error) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );
  return res;
};

export default queryChatGptApi;
