import Vue from "vue";
import {
  Aside,
  Header,
  Main,
  Footer,
  Container,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Card,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  InputNumber,
  Table,
  TableColumn,
  // Dialog,
  // Drawer,
  Button
  // Tag
} from "element-ui";
Vue.prototype.$ELEMENT = { size: "mini" };

// Vue.use(Button)
//布局
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Container);
//菜单
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

Vue.use(Card);
Vue.use(Row);
Vue.use(Col);

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(InputNumber);

// Vue.use(Tag);

Vue.use(Table);

Vue.use(TableColumn);
// Vue.use(Dialog);
// Vue.use(Drawer);

Vue.use(Button);
