import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactCreate from "./views/ContactCreate";
import ExampleComonent from "./components/ExampleComonent";
import ContactShow from "./views/ContactShow";
import ContactEdit from "./views/ContactEdit";

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {path:'',component:ExampleComonent},
    {path:'/contacts/create',component:ContactCreate},
    {path:'/contacts/:id',component:ContactShow},
    {path:'/contacts/:id/edit',component:ContactEdit},
  ],
  mode:'history'
});
