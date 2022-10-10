import GsapNumber from "./src/GsapNumber.vue";
GsapNumber.install = (App: any) => {
  App.component(GsapNumber.__name, GsapNumber);
};

export default GsapNumber;
