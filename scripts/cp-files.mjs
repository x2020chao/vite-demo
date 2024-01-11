import fs from "node:fs";

const [_node, _script, fromPath, toPath] = process.argv;

fs.rm(toPath, { force: true, recursive: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.cp(fromPath, toPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});
