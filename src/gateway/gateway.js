const baseUrl = "https://613e4b5094dbd600172abb49.mockapi.io/api/v1/events";

export const getEvent = () =>
  fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Internal Server Error. Can't display events");
  });

export const postEvent = (eventData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Internal Server Error. Can't display events");
      }
    })
    .catch((error) => {
      alert(error.message);
    });

export const fetchDelete = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });
