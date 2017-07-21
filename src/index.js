import HTMLBackend from './HTMLBackend';

export default function createHTMLBackend(manager) {
  return new HTMLBackend(manager);
}
