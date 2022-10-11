import GsapNumber from "./GsapNumber";

//按需引入
export { GsapNumber };

const components = [GsapNumber];

const install = (App: any) => {
  components.forEach((item) => {
    App.component(item.__name, item);
  });
};

export default {
  install,
  GsapNumber,
};
