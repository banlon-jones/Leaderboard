const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const apiKey = 'p8t1RkDxhKKQBmrnvQ03';

export const refresher = () => {
  window.location.reload();
};

export const getScores = async () => {
  const response = await fetch(`${baseUrl}games/${apiKey}/scores/`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { result } = await response.json();
  return result;
};

export const newScore = async (user, score) => {
  const response = await fetch(`${baseUrl}games/${apiKey}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const { result } = await response.json();
  return result;
};
