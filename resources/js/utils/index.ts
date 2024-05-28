export function getCsrfToken() {
  const token = document.head.querySelector('meta[name="csrf-token"]');

  return token ? token.getAttribute("content") : "";
}
