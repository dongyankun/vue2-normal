class Bus {
  callback: any = {};
  constructor() {
    this.callback = {};
  }
  $on(name: string, fn: Function) {
    this.callback[name] = this.callback[name] || [];
    this.callback[name].push(fn);
  }
  $emit(name: string, argus: object) {
    this.callback[name].forEach((element: Function) => {
      element(argus);
    });
  }
}

export default Bus;
