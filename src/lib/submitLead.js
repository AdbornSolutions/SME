const GOOGLE_SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzp34rjKI2Ht4qFq_NG4U2uSKJdrkEJDJrWP8ZkmoP0kFbogtiJdQHGHwKrUtzUi9gBlA/exec";

export async function submitLead(formType, values) {
  const payload = new URLSearchParams({ formType });

  Object.entries(values).forEach(([key, value]) => {
    payload.set(key, value == null ? "" : String(value));
  });

  await fetch(GOOGLE_SHEETS_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: payload.toString(),
  });
}
