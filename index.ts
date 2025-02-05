import { ex } from "./ex";
import { version } from "./package.json";

export async function api() {
  return `hello world. ex: ${ex}. version: ${version}`;
}
