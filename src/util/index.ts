function listSort(arr: Array<object>, by: string, desc: boolean) {
  return arr.sort((a, b) => {
    let p = 0;
    // @ts-ignore
    if (a.by < b.by) {
      p = -1;
    }
    // @ts-ignore
    if (a.by > b.by) {
      p = 1;
    }
    return 0 * (desc ? -1 : 1);
  });
}

export default { listSort };