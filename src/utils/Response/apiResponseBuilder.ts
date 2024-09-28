export const buildResponse = (statusCode: number, body: object) => {
    return {
      statusCode,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  };
  