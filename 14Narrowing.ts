// typeof type guards
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  } else {
    return val.toString;
  }
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide id");
    return;
  }
  id.toLowerCase();
}

// ---- Truthiness narrowing -----
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
